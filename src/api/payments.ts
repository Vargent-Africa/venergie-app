import { postData } from "utils/api";

import { PaymentInput } from "./types/payment";

export function createPayment(input: PaymentInput): Promise<string> {
	console.log("input", input);

	return postData("/payments", input);
}
