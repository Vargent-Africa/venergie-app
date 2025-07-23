import { useState } from "react";

import * as styled from "./styles/text";

type FormInputProps = React.ComponentProps<"input"> & {
	label?: string;
	errorMessage?: string;
	showLabel?: boolean;
	hasError?: boolean;
	showPassword?: boolean;
	rightIcon?: React.JSX.Element | null;
	blurFun?: () => void;
};

const FormText = (props: FormInputProps) => {
	const [focused, setFocused] = useState<boolean>(false);
	const {
		label,
		errorMessage,
		showLabel = true,
		hasError = false,
		required = false,
		disabled = false,
		showPassword = false,
		rightIcon = null,
		blurFun,
		...inputProps
	} = props;

	const handleFocus = () => {
		setFocused(true);
		blurFun && blurFun();
	};

	return (
		<styled.Wrapper>
			{showLabel && (
				<styled.FormLabel required={required}>{label}</styled.FormLabel>
			)}
			<styled.InputWrapper>
				<styled.Input
					{...inputProps}
					disabled={disabled}
					required={required}
					onBlur={handleFocus}
					data-focused={focused.toString()}
					data-haserror={hasError.toString()}
				/>
				{rightIcon && rightIcon}
				{errorMessage && <styled.InputError>{errorMessage}</styled.InputError>}
			</styled.InputWrapper>
		</styled.Wrapper>
	);
};

export default FormText;
