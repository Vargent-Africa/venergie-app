import React, { useState } from "react";

import * as styled from "./styles";

type FormSelectProps<T> = React.ComponentProps<"select"> & {
	label: string;
	options: T[];
	emptyOption?: string;
	errorMessage?: string;
	hasError?: boolean;
};

const FormSelect = <T extends { value: string; key: string; opt: string }>(
	props: FormSelectProps<T>
) => {
	const [focused, setFocused] = useState<boolean>(false);
	const {
		label,
		errorMessage,
		options,
		hasError = false,
		required = false,
		emptyOption = "Select an option",
		...inputProps
	} = props;

	const handleFocus = () => {
		setFocused(true);
	};

	return (
		<styled.SelectWrapper>
			<styled.FormLabel>{label}</styled.FormLabel>
			<styled.SelectContainer>
				<styled.Select
					{...inputProps}
					required={required}
					onBlur={handleFocus}
					data-focused={focused.toString()}
					data-haserror={hasError.toString()}
				>
					<option value="" key="">
						{emptyOption}
					</option>
					{options.map((option, _ind) => (
						<option {...option}>{option.opt}</option>
					))}
				</styled.Select>
				<styled.CaretWrap>
					<styled.CaretIcon
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</styled.CaretIcon>
				</styled.CaretWrap>
				<div className="text-red-500 text-xs px-3 py-1 hidden peer-invalid:peer-data-[focused='true']:block peer-data-[haserror='true']:block">
					{errorMessage}
				</div>
			</styled.SelectContainer>
		</styled.SelectWrapper>
	);
};

export default FormSelect;
