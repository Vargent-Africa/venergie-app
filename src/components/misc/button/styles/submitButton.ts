import styled, { css, keyframes } from "styled-components";

import { Colors } from "utils/colors";
import { Btn } from "styles/ui";

export const BtnSubmit = styled.button`
	${Btn}
	color: ${Colors.white};
	background-color: ${Colors.black};
	margin-top: 2rem;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 2rem;
	padding: 1.2rem;
	width: 100%;
	letter-spacing: 2px;
	border-radius: 4px;
`;

export const BtnContent = styled.div`
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.6rem;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const BtnContentIcon = styled.svg<{ spinning?: boolean }>`
	${({ spinning }) =>
		spinning
			? css`
					display: inline-block;
					animation: ${spin} 1s linear infinite;
					width: 2rem;
					height: 2rem;
					color: ${Colors.white};
			  `
			: "display: none;"}
`;

export const IconCircle = styled.circle`
	opacity: 0.7;
`;

export const IconPath = styled.path`
	opacity: 0.7;
`;

export const BtnContentText = styled.span`
	font-weight: 500;
	font-size: 1.3rem;
`;
