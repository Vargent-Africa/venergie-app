import styled from "styled-components";

import { Colors } from "utils/colors";
import { Btn } from "styles/ui";

export const ProfileWrapper = styled.section``;

export const ProfileHeader = styled.h1`
	font-size: 2rem;
`;

export const ProfileContainer = styled.div`
	margin-top: 4rem;
	background-color: ${Colors.white};
	border-radius: 6px;
	overflow: hidden;
	padding: 5rem 3.2rem;
	max-width: 89.6rem;
`;

export const ProfileForm = styled.form`
	background-color: ${Colors.white};
`;

export const SectionBlock = styled.div`
	margin-top: 4rem;
`;

export const SectionText = styled.h4`
	font-size: 1.6rem;
	font-weight: 500;
	border-bottom: 1px solid #d7d7d7;
	padding-bottom: 1.5rem;
`;

export const FormContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-top: 1.2rem;

	@media (max-width: 875px) {
		display: block;
	}
`;

export const SubmitBtnContainer = styled.div`
	width: 50%;
	margin-top: 2rem;

	@media (max-width: 875px) {
		width: 100%;
	}
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
