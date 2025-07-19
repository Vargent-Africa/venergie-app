import styled, { css, keyframes } from "styled-components";

import { Sizes } from "utils/screenSizes";
import { Colors } from "utils/colors";
import { Btn } from "styles/ui";

export const AuthWrapper = styled.section`
	margin: 1.6rem 0;
	flex: 1;
	display: flex;
`;

export const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const Form = styled.form`
	width: 100%;
	max-width: 45rem;
	padding: 4.4rem 2rem;
	border-radius: 6px;
	background-color: ${Colors.white};
`;

export const FormHeaderText = styled.h3`
	font-size: 1.8rem;
	font-weight: 500;
`;

export const FormSubText = styled.p`
	font-size: 1.5rem;
	margin-top: 1.5rem;
`;

export const ForgotPassLink = styled.span`
	font-size: 1.4rem;
	color: ${Colors.forestGreen};
	margin-top: 1.5rem;
	display: inline-block;
`;

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

export const BtnContentIcon = styled.svg<{ $spinning?: boolean }>`
	${({ $spinning }) =>
		$spinning
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

const BaseTinyText = styled.p`
	font-size: 1.3rem;
	margin: 1rem 0;
`;

export const TermsText = styled(BaseTinyText)`
	margin-top: 2rem;
`;

export const SignupText = styled(BaseTinyText)``;

export const TermsLink = styled.span`
	color: ${Colors.forestGreen};
`;

export const SignupLink = styled.span`
	color: ${Colors.forestGreen};
`;

export const FormContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1.5rem;

	@media (max-width: ${Sizes.md}) {
		display: block;
	}
`;

export const InputIconWrapper = styled.div`
	width: 4.8rem;
	cursor: pointer;
	position: absolute;
	top: 2rem;
	right: 1px;
	background-color: ${Colors.lightGrayBlue};
`;

export const InputIcon = styled.svg`
	width: 2rem;
	height: 2rem;
	display: block;
	margin: 0 auto;
`;
