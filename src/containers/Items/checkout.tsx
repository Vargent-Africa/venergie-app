import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { isAxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { KlumpCheckout } from "klump-react";

import FormText from "components/forms/input/Text";
import CheckBox from "components/forms/checkbox";
import PageRoutes from "utils/pageRoutes";
import { numberFormat, sanitizeErrorMsg } from "utils/helpers";
import { useCart } from "contexts/cartContext";
import { useAuth } from "contexts/authContext";
import { createCart } from "api/carts";
import useLocalStorage from "hooks/useLocalStorage";

import * as common from "styles/ui";
import * as styled from "./styles/checkout";
import { Cart } from "api/types/cart";
import { createPayment } from "api/payments";
import { PaymentGateway } from "api/types/payment";

type GuestUserInput = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	address: string;
	iagree: boolean;
};

type GuestUserInputError = {
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	address: string;
};

const Checkout = () => {
	const navigate = useNavigate();
	const { cart, totalPrice, clearCart } = useCart();
	const { isAuthenticated, authUser } = useAuth();
	const [venGt] = useLocalStorage("vengt", uuidv4());

	const [useAuthData, setUseAuthData] = useState(false);

	const [formData, setFormData] = useState<GuestUserInput>({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		address: "",
		iagree: false,
	});

	const [errorMsg, setErrorMsg] = useState<GuestUserInputError>({
		first_name: "",
		email: "",
		last_name: "",
		phone_number: "",
		address: "",
	});

	const { firstName, lastName, email, phoneNumber, address, iagree } = formData;

	const {
		first_name: eFirstName,
		last_name: eLastName,
		email: eEmail,
		phone_number: ePhoneNumber,
		address: eAddress,
	} = errorMsg;

	const handleToggleDisable = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUseAuthData(e.target.checked);
	};

	const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const { mutate: createCartFn } = useMutation({
		mutationFn: createCart,
		onSuccess: (data) => {
			payWithKlump(data);
		},
		onError: (err) => {
			if (isAxiosError(err)) {
				setErrorMsg({
					first_name: "",
					email: "",
					last_name: "",
					phone_number: "",
					address: "",
				});

				const errorMsgs = sanitizeErrorMsg(
					err.response?.data.message
				) as Record<string, string>;

				setErrorMsg((prev) => ({ ...prev, ...errorMsgs }));
			} else {
				return;
			}
		},
	});

	const { mutate: createPaymentFn } = useMutation({
		mutationFn: createPayment,
		onSuccess: () => {
			navigate(PageRoutes.orderReceived, {
				replace: true,
				state: {
					info: "successful",
				},
			});
			clearCart();
		},
	});

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (
			!useAuthData &&
			(!firstName || !lastName || !address || !email || !phoneNumber)
		) {
			toast.error("Kindly provide all required fields before you proceed");
			return;
		}

		if (!useAuthData && !iagree) {
			toast.error(
				"Kindly agree to our Terms and Conditions before you proceed"
			);
			return;
		}

		const newCartItems = cart.map(
			({ itemId, itemName, quantity, unitPrice }) => ({
				item_guid: itemId,
				item_name: itemName,
				quantity,
				unit_price: unitPrice,
			})
		);

		if (useAuthData && authUser) {
			const userCart = {
				user_guid: authUser.guid,
				guest_token: venGt ?? "",
				cart_item: newCartItems,
				first_name: authUser.first_name,
				last_name: authUser.last_name,
				email: authUser.email,
				address: authUser.address,
				phone_number: authUser.phone_number,
			};

			createCartFn(userCart);
		} else {
			const guestCart = {
				user_guid: authUser ? authUser.guid : null,
				guest_token: venGt ?? "",
				cart_item: newCartItems,
				first_name: firstName,
				last_name: lastName,
				email,
				address,
				phone_number: phoneNumber,
			};

			createCartFn(guestCart);
		}
	};

	useEffect(() => {
		if (cart.length === 0) {
			toast.warn("Your cart is empty. Please add items before checking out.");
			navigate(PageRoutes.itemLists, { replace: true });
		}
	}, [cart]);

	const payWithKlump = (cart: Cart) => {
		const {
			first_name,
			last_name,
			email: userEmail,
			phone,
		} = cart.delivery_details;
		const { shipping_fee, sub_total } = cart.order_cost;
		const items = cart.cart_item.map(
			({
				item_guid: itemGuid,
				item_name: itemName,
				quantity,
				unit_price: unitPrice,
			}) => ({
				image_url:
					"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
				item_url: `${import.meta.env.VG_APP_BASE_URL}/items/${itemGuid}`,
				name: itemName,
				quantity,
				unit_price: +unitPrice,
			})
		);

		const payload = {
			publicKey: import.meta.env.VG_KLUMP_PUBKEY,
			data: {
				amount: sub_total,
				shipping_fee,
				currency: "NGN",
				first_name,
				last_name,
				email: userEmail,
				phone,
				merchant_reference: cart.order_payment_ref,
				meta_data: {
					ref: cart.order_payment_ref,
				},
				items,
			},
			onSuccess,
			onError,
		};

		new Klump(payload);
	};

	const onSuccess = (eventData: KlumpSuccessData) => {
		createPaymentFn({
			payment_gateway: PaymentGateway.KLUMP,
			payment_gateway_status: "new",
			payment_meta: eventData.data,
			payment_gateway_ref: eventData.data.data.data.reference,
		});
		return eventData;
	};

	const onError = (data: KlumpError) => {
		toast.error(data.data.message);
	};

	return (
		<styled.CheckoutWrapper $isDisabled={useAuthData}>
			<common.Container>
				<styled.CheckoutContainer $isDisabled={useAuthData}>
					<styled.CheckoutInfo>
						<common.PageTitle>Checkout</common.PageTitle>
						<styled.ShippingInfo>Shipping Info</styled.ShippingInfo>
						{isAuthenticated && (
							<CheckBox
								label="Use my user details"
								checked={useAuthData}
								onChange={handleToggleDisable}
							/>
						)}
						<styled.Form $isDisabled={useAuthData}>
							<styled.FormContainer>
								<FormText
									label="First Name"
									type="text"
									name="firstName"
									value={firstName}
									disabled={useAuthData}
									onChange={handleOnchange}
									pattern="^[a-zA-Z]+$"
									placeholder="Enter your first name"
									hasError={eFirstName == "" ? false : true}
									errorMessage={
										eFirstName !== ""
											? eFirstName
											: "First name is required and should contain only letters"
									}
									onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity(
											"First name is required and should contain only letters"
										)
									}
									onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity("")
									}
									required
								/>
								<FormText
									label="Last Name"
									type="text"
									name="lastName"
									value={lastName}
									disabled={useAuthData}
									onChange={handleOnchange}
									placeholder="Enter your last name"
									pattern="^[a-zA-Z]+$"
									hasError={eLastName == "" ? false : true}
									errorMessage={
										eLastName !== ""
											? eLastName
											: "Last name is required and should contain only letters"
									}
									onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity(
											"Last name is required and should contain only letters"
										)
									}
									onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity("")
									}
									required
								/>
							</styled.FormContainer>
							<styled.FormContainer>
								<FormText
									label="Email"
									type="email"
									name="email"
									value={email}
									disabled={useAuthData}
									onChange={handleOnchange}
									placeholder="Enter your email address"
									required
									hasError={eEmail == "" ? false : true}
									errorMessage={
										eEmail !== "" ? eEmail : "Must be a valid email"
									}
									onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity("Must be a valid email")
									}
									onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity("")
									}
								/>
								<FormText
									label="Mobile"
									type="tel"
									name="phoneNumber"
									value={phoneNumber}
									disabled={useAuthData}
									onChange={handleOnchange}
									placeholder="Enter your phone number in this format: +234xxxxxxxxxx"
									required
									hasError={ePhoneNumber == "" ? false : true}
									errorMessage={
										ePhoneNumber !== ""
											? ePhoneNumber
											: "Please enter a valid phone number"
									}
									onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity(
											"Please enter a valid phone number"
										)
									}
									onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity("")
									}
								/>
							</styled.FormContainer>
							<styled.FormContainer>
								<FormText
									label="Address"
									type="text"
									name="address"
									value={address}
									disabled={useAuthData}
									onChange={handleOnchange}
									placeholder="Enter your address"
									required
									hasError={eAddress == "" ? false : true}
									errorMessage={
										address !== "" ? address : "Address is required"
									}
									onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity("Address is required")
									}
									onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
										e.target.setCustomValidity("")
									}
								/>
							</styled.FormContainer>
							<CheckBox
								name="iagree"
								label="I have read and agreed to the Terms and Conditions"
								disabled={useAuthData}
								onChange={handleOnchange}
							/>
						</styled.Form>
					</styled.CheckoutInfo>
					<styled.CheckoutReview>
						<styled.ReviewTitle>Review your cart</styled.ReviewTitle>
						<styled.ReviewItemContainer>
							{cart?.map((ct) => (
								<styled.ReviewItem key={ct.itemId}>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>{ct.itemName}</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>
												{numberFormat(ct.quantity)}x
											</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>{`NGN ${numberFormat(
												ct.unitPrice
											)}`}</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
							))}
						</styled.ReviewItemContainer>
						<styled.CheckoutSummaryWrapper>
							<styled.CheckoutSummaryContainer>
								<styled.CheckoutSummaryTitle>
									Subtotal
								</styled.CheckoutSummaryTitle>
								<styled.CheckoutSummaryPrice>
									{`NGN ${numberFormat(totalPrice)}`}
								</styled.CheckoutSummaryPrice>
							</styled.CheckoutSummaryContainer>
							<styled.CheckoutSummaryContainer>
								<styled.CheckoutSummaryTitle>
									Shipping
								</styled.CheckoutSummaryTitle>
								<styled.CheckoutSummaryPrice>NGN 0</styled.CheckoutSummaryPrice>
							</styled.CheckoutSummaryContainer>
							<styled.CheckoutSummaryContainer>
								<styled.CheckoutSummaryTotal>Total</styled.CheckoutSummaryTotal>
								<styled.CheckoutSummaryTotalPrice>
									{`NGN ${numberFormat(totalPrice)}`}
								</styled.CheckoutSummaryTotalPrice>
							</styled.CheckoutSummaryContainer>
							<styled.BtnPayWrapper>
								<KlumpCheckout onClick={handleSubmit} />
							</styled.BtnPayWrapper>
						</styled.CheckoutSummaryWrapper>
					</styled.CheckoutReview>
				</styled.CheckoutContainer>
			</common.Container>
		</styled.CheckoutWrapper>
	);
};

export default Checkout;
