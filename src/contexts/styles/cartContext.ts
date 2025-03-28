import styled from "styled-components";

import { Colors } from "utils/colors";
import { Btn } from "styles/ui";

export const CartWrapper = styled.section`
	/* position: relative; */
`;

export const CartContainer = styled.section`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	right: 0;
	background-color: #f2f2ef;
	max-width: 550px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	opacity: 1;
	transform: translateX(100%);
	transition: transform 0.5s ease-in-out;
	overflow: hidden;
	&.show {
		transform: translateX(0);
	}
`;

export const CartHead = styled.div`
	position: relative;
	margin-top: 3rem;
`;

export const CartTitle = styled.h2`
	text-align: center;
	color: #696969;
	font-weight: 400;
	letter-spacing: 1px;
	font-size: 1.6rem;
	margin: auto;
	line-height: 1.2;
	width: 100%;
`;

export const HideCart = styled.div`
	position: absolute;
	top: 0;
	left: 2rem;
	cursor: pointer;
`;

export const CartBody = styled.div`
	flex-grow: 1;
	margin-top: 3rem;
	padding: 0 2rem;
	/* overflow-y: scroll; */
`;

export const CartBodyContainer = styled.div`
	max-height: calc(100vh - 25rem);
	overflow-y: scroll;
	overflow-x: hidden;
`;

export const CartItem = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	position: relative;
	margin: 2rem 0;
	background-color: ${Colors.white};
	padding: 2rem;
	border-radius: 4px;
`;

export const CartDetails = styled.div`
	color: #1e2d2b;
	width: 70%;
	font-size: 1rem;
	letter-spacing: 0.02px;

	@media (max-width: 380px) {
		width: 100%;
	}
`;

export const CartItemTitle = styled.h2`
	letter-spacing: 0.03px;
	font-size: 1.5rem;
	line-height: 1.5;
	font-weight: 300;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	text-transform: capitalize;
`;

export const QuantityPriceContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	column-gap: 1.5rem;
	margin-top: 0.3rem;
`;

export const CartItemPrice = styled.div`
	width: inherit;
	font-size: 1.7rem;
	letter-spacing: 0.03px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	text-transform: capitalize;
`;

export const CartItemImageWrapper = styled.div`
	width: 7rem;
	height: 7rem;
	margin-right: 20px;
`;

export const CartItemImage = styled.img`
	overflow: hidden;
	height: 100%;
	width: 100%;
	object-fit: contain;
	border-radius: 5px;
`;

export const RemoveItem = styled.span`
	position: absolute;
	right: 1.5rem;
	top: 0.4rem;
	cursor: pointer;
	color: ${Colors.red};
`;

export const CartSummary = styled.div`
	padding: 1rem 2rem 2rem;
	border-top: 1px solid #d0d0d0;
	box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
	z-index: 1;
	position: inherit;
	bottom: 0;
	width: 100%;
`;

export const CartSummaryHead = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1rem 0;
	padding-top: 1.5rem;
`;

export const CartSumTitle = styled.span`
	font-size: 1.7rem;
	text-transform: uppercase;
`;

export const CartSumTotal = styled.span`
	font-size: 1.6rem;
`;

export const BtnCheckout = styled.button`
	${Btn}
	color: ${Colors.white};
	background-color: ${Colors.black};
	margin-top: 2rem;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 2rem;
	padding: 1.5rem;
	width: 100%;
	letter-spacing: 2px;
	border-radius: 2px;
`;
