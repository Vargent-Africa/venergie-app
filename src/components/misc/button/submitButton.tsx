import * as styled from "./styles/submitButton";

type ButtonContentProp = {
	text?: string;
	disabled?: boolean;
};

const SubmitButton = ({
	text = "Submit",
	disabled = false,
}: ButtonContentProp) => {
	return (
		<styled.BtnContent>
			<styled.BtnContentIcon
				$spinning={disabled}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<styled.IconCircle
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></styled.IconCircle>
				<styled.IconPath
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></styled.IconPath>
			</styled.BtnContentIcon>
			<styled.BtnContentText>{text}</styled.BtnContentText>
		</styled.BtnContent>
	);
};

export default SubmitButton;
