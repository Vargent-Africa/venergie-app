declare global {
	type SelectOptions = {
		key: string;
		value: string;
		opt: string;
	};
}

// This line is required to make this a module (avoid isolatedModules error)
export {};
