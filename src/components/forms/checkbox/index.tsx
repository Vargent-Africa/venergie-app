import * as styled from "./styles/index";

const CheckBox = () => {
	return (
		<styled.CheckBox>
			<styled.CheckBoxInput id="agree" />
			<styled.CheckBoxLabel htmlFor="agree">
				I have read and agreed to the Terms and Conditions
			</styled.CheckBoxLabel>
		</styled.CheckBox>
	);
};

export default CheckBox;
