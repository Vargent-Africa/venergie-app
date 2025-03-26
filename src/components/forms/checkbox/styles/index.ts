import styled from "styled-components";

import { Colors } from "utils/colors";

export const CheckBox = styled.div`
	text-align: left;
	width: 100%;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 1.4rem;
	font-weight: 500;
	margin-top: 3rem;
`;

export const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
	line-height: 1.25;
	accent-color: ${Colors.black};
	cursor: pointer;
`;

export const CheckBoxLabel = styled.label`
	font-size: 1.4rem;
`;
