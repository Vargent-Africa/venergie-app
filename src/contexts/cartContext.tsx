import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import QuantityControl from "components/misc/QuantityControl";
import { numberFormat } from "utils/helpers";
import EmptyState from "components/misc/EmptyState";
import PageRoutes from "utils/pageRoutes";

import * as styled from "./styles/cartContext";

type CartContextType = {
	totalPrice: number;
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	clearCart: () => void;
	showCart: () => void;
	hideCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_KEY = "cart-items";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [cart, setCart] = useState<CartItem[]>(() => {
		const stored = localStorage.getItem(CART_KEY);
		try {
			return stored ? (JSON.parse(stored) as CartItem[]) : [];
		} catch {
			return [];
		}
	});

	const cartRef = useRef<HTMLElement | null>(null);
	const overlayRef = useRef<HTMLDivElement | null>(null);
	const navigate = useNavigate();

	const showCart = () => {
		cartRef.current?.classList.add("show");
		overlayRef.current?.classList.remove("hide");
	};

	const hideCart = () => {
		cartRef.current?.classList.remove("show");
		overlayRef.current?.classList.add("hide");
	};

	const gotoCheckout = () => {
		hideCart();
		if (cart.length === 0) {
			toast.warn("Your cart is empty. Please add items before checking out.");
			return;
		}
		navigate(PageRoutes.checkout, { replace: true });
	};

	useEffect(() => {
		localStorage.setItem(CART_KEY, JSON.stringify(cart));
	}, [cart]);

	const addToCart = (item: CartItem) => {
		setCart((prev) => {
			const existing = prev.find((i) => i.itemId === item.itemId);
			if (existing) {
				return prev.map((i) =>
					i.itemId === item.itemId
						? { ...i, quantity: i.quantity + item.quantity }
						: i
				);
			}
			return [...prev, item];
		});
	};

	const updateQuantity = (quantity: number, itemId: string) => {
		setCart((prev) =>
			prev.map((item) =>
				item.itemId === itemId ? { ...item, quantity } : item
			)
		);
	};

	const removeFromCart = (itemId: string) => {
		setCart((prev) => prev.filter((i) => i.itemId !== itemId));
	};

	const totalPrice = cart.reduce((sum, item) => {
		return sum + item.unitPrice * item.quantity;
	}, 0);

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				totalPrice,
				addToCart,
				clearCart,
				showCart,
				hideCart,
			}}
		>
			<div className="overlay hide" ref={overlayRef}></div>
			<styled.CartContainer ref={cartRef}>
				<styled.CartHead>
					<styled.HideCart onClick={hideCart}>
						<styled.HideCartIcon
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
						>
							<styled.HideCartIconPath
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
							/>
						</styled.HideCartIcon>
					</styled.HideCart>
					<styled.CartTitle>YOUR CART</styled.CartTitle>
				</styled.CartHead>
				<styled.CartBody>
					<styled.CartBodyContainer>
						{cart?.length === 0 ? (
							<EmptyState content="You have no item in your basket" />
						) : (
							cart?.map((ct) => (
								<styled.CartItem key={ct.itemId}>
									<styled.CartDetails>
										<styled.CartItemTitle>{ct.itemName}</styled.CartItemTitle>
										<styled.QuantityPriceContainer>
											<QuantityControl
												max={ct.maxQuantity}
												quantity={ct.quantity}
												id={ct.itemId}
												onChange={updateQuantity}
											/>
											<styled.CartItemPrice>{`NGN ${numberFormat(
												ct.unitPrice
											)}`}</styled.CartItemPrice>
										</styled.QuantityPriceContainer>
									</styled.CartDetails>
									<styled.CartItemImageWrapper>
										{ct.itemImg ? (
											<styled.CartItemImage src={ct.itemImg} alt="Cart image" />
										) : (
											<styled.CartItemImage
												src="/images/item-img.png"
												alt="Cart image"
											/>
										)}
									</styled.CartItemImageWrapper>
									<styled.RemoveItem onClick={() => removeFromCart(ct.itemId)}>
										&#x2715;
									</styled.RemoveItem>
								</styled.CartItem>
							))
						)}
					</styled.CartBodyContainer>
				</styled.CartBody>
				<styled.CartSummary>
					<styled.CartSummaryHead>
						<styled.CartSumTitle>Total</styled.CartSumTitle>
						<styled.CartSumTotal>
							{`NGN ${numberFormat(totalPrice)}`}
						</styled.CartSumTotal>
					</styled.CartSummaryHead>
					<styled.BtnCheckout onClick={gotoCheckout}>
						PROCEED TO CHECKOUT
					</styled.BtnCheckout>
				</styled.CartSummary>
			</styled.CartContainer>
			{children}
		</CartContext.Provider>
	);
};

// Custom hook for accessing cart context
export const useCart = (): CartContextType => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
