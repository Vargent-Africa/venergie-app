import styled from "styled-components";

export const QuantityControls = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-width: 1px;
	width: 10rem;
	padding: 0.8rem 0;
`;

export const QuantityBtn = styled.button`
	border-width: 0px;
	background-color: transparent;
	cursor: pointer;
	font-size: 2rem;
	padding: 0.2rem 0.6rem;
	outline: 2px solid transparent;
	outline-offset: 2px;
`;

export const Quantity = styled.span`
	padding: 0 0.8rem;
	text-align: center;
	font-size: 1.8rem;
`;
