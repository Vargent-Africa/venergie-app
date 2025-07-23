type NumberFormatOptions = {
	currency: string;
	style: "currency" | "decimal" | "unit";
};

export const numberFormat = (value: number, options?: NumberFormatOptions) =>
	new Intl.NumberFormat("en", { ...options }).format(value);
