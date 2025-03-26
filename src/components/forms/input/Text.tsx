import React from "react";

import * as styled from "./styles/text";

type FormInputProps = React.ComponentProps<"input"> & {
	label?: string;
	errorMessage?: string;
	showLabel?: boolean;
	hasError?: boolean;
};

const FormText = (props: FormInputProps) => {
	const {
		label,
		errorMessage,
		showLabel = true,
		hasError = false,
		required = false,
		disabled = false,
		...inputProps
	} = props;

	return (
		<styled.Wrapper>
			{showLabel && <styled.FormLabel required>{label}</styled.FormLabel>}
			<styled.Input {...inputProps} disabled={disabled} required={required} />
		</styled.Wrapper>
	);
};

export default FormText;
