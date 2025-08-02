import styled, { css } from "styled-components";

import { Colors } from "utils/colors";

export const CheckoutWrapper = styled.section<{ $isDisabled?: boolean }>`
	margin: 3rem 0 3.2rem;

	${({ $isDisabled }) =>
		$isDisabled &&
		css`
			width: 50%;
			margin-left: auto;
			margin-right: auto;
		`}

	@media (max-width: 910px) {
		width: 100%;
	}
`;

export const CheckoutContainer = styled.div<{ $isDisabled?: boolean }>`
	display: flex;
	background-color: ${Colors.white};
	border-radius: 5px;

	${({ $isDisabled }) =>
		$isDisabled &&
		css`
			flex-direction: column;
			justify-content: center;
			align-items: center;
		`}

	@media (min-width: 875px) {
		min-height: 70vh;
	}

	@media (max-width: 820px) {
		display: block;
	}
`;

export const CheckoutInfo = styled.div`
	padding: 4rem 1rem 3rem 2rem;
	flex-grow: 1;
`;

export const ShippingInfo = styled.h3`
	font-size: 1.5rem;
	margin-top: 3rem;
`;

export const Form = styled.form<{ $isDisabled?: boolean }>`
	margin-top: 1rem;
	display: ${({ $isDisabled }) => ($isDisabled ? "none" : "block")};
`;

export const FormContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin-top: 1.5rem;

	@media (max-width: 875px) {
		display: block;
	}
`;

export const CheckoutReview = styled.div`
	max-height: 82vh;
	max-width: 50rem;
	min-width: 40rem;

	padding: 4rem 2rem;

	@media (max-width: 775px) {
		max-width: 30rem;
		min-width: 20rem;
	}

	@media (max-width: 820px) {
		max-width: 100%;
	}
`;

export const ReviewTitle = styled.h2`
	font-size: 1.4rem;
`;

export const ReviewItemContainer = styled.div`
	margin-top: 1rem;
	max-height: calc(80vh - 25rem);
	overflow-y: scroll;
	overflow-x: hidden;
`;

export const ReviewItem = styled.div`
	display: flex;
	gap: 1.5rem;
	position: relative;
	margin: 1.3rem 0;
	background-color: ${Colors.white};
	padding: 1rem;
	border-radius: 4px;
	overflow: hidden;
`;

export const ReviewItemImageWrapper = styled.div`
	width: 5rem;
	height: 5rem;
`;

export const ReviewItemImage = styled.img`
	overflow: hidden;
	height: 100%;
	width: 100%;
	object-fit: contain;
	border-radius: 5px;
`;

export const ReviewItemDetails = styled.div`
	width: 80%;
`;

export const ReviewItemName = styled.h3`
	font-size: 1.3rem;
	letter-spacing: 0.03px;
	line-height: 1.5;
	font-weight: 300;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	text-transform: capitalize;
`;

export const ReviewItemQuantityPrice = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 0.5rem;
`;

export const ReviewItemQuantity = styled.span`
	font-size: 1.4rem;
`;

export const ReviewItemPrice = styled.div`
	font-size: 1.6rem;
`;

export const CheckoutSummary = styled.div`
	padding: 1rem 2rem 2rem;
	border-top: 1px solid #d0d0d0;
	box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
	z-index: 1;
	position: inherit;
	bottom: 0;
	width: 100%;
	margin-top: 2rem;
`;

export const CheckoutSummaryWrapper = styled.div`
	margin-top: 3rem;
`;

export const CheckoutSummaryContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
`;

export const CheckoutSummaryTitle = styled.span`
	font-size: 1.6rem;
	text-transform: capitalize;
`;

export const CheckoutSummaryPrice = styled.span`
	font-size: 1.4rem;
`;

export const CheckoutSummaryTotal = styled.span`
	font-size: 1.8rem;
	text-transform: capitalize;
	font-weight: 600;
`;

export const CheckoutSummaryTotalPrice = styled.span`
	font-size: 2rem;
	font-weight: 600;
`;

export const BtnPayWrapper = styled.div`
	margin-top: 2rem;
`;
