import { Fragment } from "react";

import FormText from "components/forms/input/Text";
import CheckBox from "components/forms/checkbox";

import * as common from "styles/ui";

import * as styled from "./styles/checkout";

const Checkout = () => {
	return (
		<Fragment>
			<styled.CheckoutWrapper>
				<common.Container>
					<styled.CheckoutContainer>
						<styled.CheckoutInfo>
							<common.PageTitle>Checkout</common.PageTitle>
							<styled.ShippingInfo>Shipping Info</styled.ShippingInfo>
							<form>
								<styled.FormContainer>
									<FormText
										label="First Name"
										type="text"
										name="firstname"
										placeholder="Enter your first name"
										required
									/>
									<FormText
										label="Last Name"
										type="text"
										name="lastname"
										placeholder="Enter your last name"
										required
									/>
								</styled.FormContainer>
								<styled.FormContainer>
									<FormText
										label="Email"
										type="email"
										name="email"
										placeholder="Enter your email address"
										required
									/>
									<FormText
										label="Phone Number"
										type="text"
										name="phone"
										placeholder="Enter your phone number"
										required
									/>
								</styled.FormContainer>
								<styled.FormContainer>
									<FormText
										label="Address"
										type="text"
										name="address"
										placeholder="Enter your address"
										required
									/>
								</styled.FormContainer>
								<CheckBox />
							</form>
						</styled.CheckoutInfo>
						<styled.CheckoutReview>
							<styled.ReviewTitle>Review your cart</styled.ReviewTitle>
							<styled.ReviewItemContainer>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar inverter Solar inverter Solar
											inverter Solar inverter nhgggd yddy
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>1x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$200</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar inverter Solar inverter Solar
											inverter Solar inverter nhgggd yddy
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>1x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$200</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar inverter Solar inverter Solar
											inverter Solar inverter nhgggd yddy
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>1x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$200</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar inverter Solar inverter Solar
											inverter Solar inverter nhgggd yddy
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>1x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$200</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar inverter Solar inverter Solar
											inverter Solar inverter nhgggd yddy
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>1x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$200</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar inverter Solar inverter Solar
											inverter Solar inverter nhgggd yddy
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>1x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$200</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar inverter Solar inverter Solar
											inverter Solar inverter nhgggd yddy
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>1x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$200</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar inverter Solar inverter Solar
											inverter Solar inverter nhgggd yddy
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>1x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$200</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar inverter Solar inverter Solar
											inverter Solar inverter nhgggd yddy
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>2x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$500</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
								<styled.ReviewItem>
									<styled.ReviewItemImageWrapper>
										<styled.ReviewItemImage
											src="/src/assets/images/item1.png"
											alt="Item"
										/>
									</styled.ReviewItemImageWrapper>
									<styled.ReviewItemDetails>
										<styled.ReviewItemName>
											Solar inverter Solar
										</styled.ReviewItemName>
										<styled.ReviewItemQuantityPrice>
											<styled.ReviewItemQuantity>3x</styled.ReviewItemQuantity>
											<styled.ReviewItemPrice>$1,500</styled.ReviewItemPrice>
										</styled.ReviewItemQuantityPrice>
									</styled.ReviewItemDetails>
								</styled.ReviewItem>
							</styled.ReviewItemContainer>
							<styled.CheckoutSummaryWrapper>
								<styled.CheckoutSummaryContainer>
									<styled.CheckoutSummaryTitle>
										Subtotal
									</styled.CheckoutSummaryTitle>
									<styled.CheckoutSummaryPrice>
										$4,000
									</styled.CheckoutSummaryPrice>
								</styled.CheckoutSummaryContainer>
								<styled.CheckoutSummaryContainer>
									<styled.CheckoutSummaryTitle>
										Shipping
									</styled.CheckoutSummaryTitle>
									<styled.CheckoutSummaryPrice>
										$100
									</styled.CheckoutSummaryPrice>
								</styled.CheckoutSummaryContainer>
								<styled.CheckoutSummaryContainer>
									<styled.CheckoutSummaryTotal>
										Total
									</styled.CheckoutSummaryTotal>
									<styled.CheckoutSummaryTotalPrice>
										$4,100
									</styled.CheckoutSummaryTotalPrice>
								</styled.CheckoutSummaryContainer>
								<styled.BtnPayNow>PAY NOW</styled.BtnPayNow>
							</styled.CheckoutSummaryWrapper>
						</styled.CheckoutReview>
					</styled.CheckoutContainer>
				</common.Container>
			</styled.CheckoutWrapper>
		</Fragment>
	);
};

export default Checkout;
