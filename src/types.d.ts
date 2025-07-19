declare global {
	type SelectOptions = {
		key: string;
		value: string;
		opt: string;
	};

	type MessageResponse = {
		msg: string;
	};

	type FormInputProps = React.ComponentProps<"input"> & {
		label?: string;
		errorMessage?: string;
		showLabel?: boolean;
		hasError?: boolean;
		showPassword?: boolean;
		rightIcon?: React.JSX.Element | null;
		blurFun?: () => void;
	};
}

// This line is required to make this a module (avoid isolatedModules error)
export {};
