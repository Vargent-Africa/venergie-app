import { useState } from "react";
import * as styled from "./styles";

type QuantitySelectorProps = {
	min?: number;
	max: number;
	initial?: number;
	id?: string;
	onChange?: (qty: number, id: string) => void;
};

const QuantityControl = ({
	min = 1,
	max,
	initial = 1,
	id = "",
	onChange,
}: QuantitySelectorProps) => {
	const [quantity, setQuantity] = useState(initial);

	const updateQuantity = (value: number) => {
		const newQty = Math.min(Math.max(value, min), max);
		setQuantity(newQty);
		onChange?.(newQty, id);
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
