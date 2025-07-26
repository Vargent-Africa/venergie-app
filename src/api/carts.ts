import { postData } from "utils/api";

import { CreateCartInput } from "./types/cart";

export function createCart(input: CreateCartInput): Promise<MessageResponse> {
	return postData("/carts", input);
}
