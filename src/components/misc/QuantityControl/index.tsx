import * as styled from "./styles";

const QuantityControl = () => {
	return (
		<styled.QuantityControls>
			<styled.QuantityBtn>&#x2212;</styled.QuantityBtn>
			<styled.Quantity>2</styled.Quantity>
			<styled.QuantityBtn>&#x2b;</styled.QuantityBtn>
		</styled.QuantityControls>
	);
};

export default QuantityControl;
