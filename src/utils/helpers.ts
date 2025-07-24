type NumberFormatOptions = {
	currency: string;
	style: "currency" | "decimal" | "unit";
};

export const numberFormat = (
	value: number | string,
	options?: NumberFormatOptions
) => {
	const num = typeof value === "string" ? Number(value) : value;
	return new Intl.NumberFormat("en", { ...options }).format(num);
};
