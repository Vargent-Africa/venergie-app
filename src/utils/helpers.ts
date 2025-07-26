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

export const sanitizeErrorMsg = (
	errMsg: FormErrorMsg[] | string
): Record<string, string> | string => {
	if (Array.isArray(errMsg)) {
		return errMsg.reduce((acc, { field, error }) => {
			acc[field] = error.replace(/_/g, " ");
			return acc;
		}, {} as Record<string, string>);
	}
	return errMsg;
};
