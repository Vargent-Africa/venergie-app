import * as styled from "./styles/index";

type FormCheckboxProps = React.ComponentProps<"input"> & {
	label?: string;
};

const CheckBox = (props: FormCheckboxProps) => {
	const { label, ...inputProps } = props;
	return (
		<styled.CheckBox>
			<styled.CheckBoxInput {...inputProps} />
			<styled.CheckBoxLabel>{label}</styled.CheckBoxLabel>
		</styled.CheckBox>
	);
};

export default CheckBox;
