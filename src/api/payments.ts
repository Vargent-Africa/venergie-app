import { postData } from "utils/api";

import { PaymentInput } from "./types/payment";

export function createPayment(input: PaymentInput): Promise<string> {
	return postData("/payments", input);
}
