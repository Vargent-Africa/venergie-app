import React, { createContext, useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { FaCircleArrowRight } from "react-icons/fa6";

import QuantityControl from "components/misc/QuantityControl";

import * as styled from "./styles/cartContext";

type CartContextType = {
	showCart: () => void;
	hideCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
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
		navigate("items/checkout", { replace: true });
	};

	return (
		<CartContext.Provider value={{ showCart, hideCart }}>
			<div className="overlay hide" ref={overlayRef}></div>
			<styled.CartContainer ref={cartRef}>
				<styled.CartHead>
					<styled.HideCart onClick={hideCart}>
						<FaCircleArrowRight size={25} />
					</styled.HideCart>
					<styled.CartTitle>YOUR CART</styled.CartTitle>
				</styled.CartHead>
				<styled.CartBody>
					<styled.CartBodyContainer>
						<styled.CartItem>
							<styled.CartDetails>
								<styled.CartItemTitle>
									Solar inverter Solar inverter Solar inverter Solar inverter
									Solar inverter
								</styled.CartItemTitle>
								<styled.QuantityPriceContainer>
									<QuantityControl />
									<styled.CartItemPrice>USD 2,000,100</styled.CartItemPrice>
								</styled.QuantityPriceContainer>
							</styled.CartDetails>
							<styled.CartItemImageWrapper>
								<styled.CartItemImage src="/images/item1.png" alt="Item" />
							</styled.CartItemImageWrapper>
							<styled.RemoveItem>&#x2715;</styled.RemoveItem>
						</styled.CartItem>
						<styled.CartItem>
							<styled.CartDetails>
								<styled.CartItemTitle>
									Solar inverter Solar inverter Solar inverter Solar inverter
									Solar inverter
								</styled.CartItemTitle>
								<styled.QuantityPriceContainer>
									<QuantityControl />
									<styled.CartItemPrice>USD 2,000</styled.CartItemPrice>
								</styled.QuantityPriceContainer>
							</styled.CartDetails>
							<styled.CartItemImageWrapper>
								<styled.CartItemImage src="/images/item1.png" alt="Item" />
							</styled.CartItemImageWrapper>
							<styled.RemoveItem>&#x2715;</styled.RemoveItem>
						</styled.CartItem>
						<styled.CartItem>
							<styled.CartDetails>
								<styled.CartItemTitle>
									Solar inverter Solar inverter Solar inverter Solar inverter
									Solar inverter
								</styled.CartItemTitle>
								<styled.QuantityPriceContainer>
									<QuantityControl />
									<styled.CartItemPrice>USD 2,000</styled.CartItemPrice>
								</styled.QuantityPriceContainer>
							</styled.CartDetails>
							<styled.CartItemImageWrapper>
								<styled.CartItemImage src="/images/item1.png" alt="Item" />
							</styled.CartItemImageWrapper>
							<styled.RemoveItem>&#x2715;</styled.RemoveItem>
						</styled.CartItem>
						<styled.CartItem>
							<styled.CartDetails>
								<styled.CartItemTitle>
									Solar inverter Solar inverter Solar inverter Solar inverter
									Solar inverter
								</styled.CartItemTitle>
								<styled.QuantityPriceContainer>
									<QuantityControl />
									<styled.CartItemPrice>USD 2,000</styled.CartItemPrice>
								</styled.QuantityPriceContainer>
							</styled.CartDetails>
							<styled.CartItemImageWrapper>
								<styled.CartItemImage src="/images/item1.png" alt="Item" />
							</styled.CartItemImageWrapper>
							<styled.RemoveItem>&#x2715;</styled.RemoveItem>
						</styled.CartItem>
					</styled.CartBodyContainer>
				</styled.CartBody>
				<styled.CartSummary>
					<styled.CartSummaryHead>
						<styled.CartSumTitle>Total</styled.CartSumTitle>
						<styled.CartSumTotal>USD 5,000</styled.CartSumTotal>
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
