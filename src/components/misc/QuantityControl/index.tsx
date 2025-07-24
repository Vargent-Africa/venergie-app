import { useState } from "react";

import * as styled from "./styles";

type QuantitySelectorProps = {
	min?: number;
	max?: number;
	initial?: number;
	onChange?: (quantity: number) => void;
};

const QuantityControl = ({
	min = 1,
	max = 99,
	initial = 1,
	onChange,
}: QuantitySelectorProps) => {
	const [quantity, setQuantity] = useState(initial);

	const updateQuantity = (value: number) => {
		const newQty = Math.min(Math.max(value, min), max);
		setQuantity(newQty);
		onChange?.(newQty);
	};

	return (
		<styled.QuantityControls>
			<styled.QuantityBtn
				onClick={() => updateQuantity(quantity - 1)}
				disabled={quantity <= min}
			>
				&#x2212;
			</styled.QuantityBtn>
			<styled.Quantity
				value={quantity}
				min={min}
				max={max}
				onChange={(e) => updateQuantity(Number(e.target.value))}
			/>
			<styled.QuantityBtn
				onClick={() => updateQuantity(quantity + 1)}
				disabled={quantity >= max}
			>
				&#x2b;
			</styled.QuantityBtn>
		</styled.QuantityControls>
	);
};

export default QuantityControl;
