import styled from "styled-components";

import { Colors } from "utils/colors";

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
	color: ${Colors.black};
`;

export const Quantity = styled.input.attrs({ type: "number" })`
	padding: 0.3rem 0.8rem;
	width: 4rem;
	text-align: center;
	font-size: 1.8rem;
	border: none;
	background-color: transparent;

	&:focus {
		outline: none;
		border: none;
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	-moz-appearance: textfield;
`;
