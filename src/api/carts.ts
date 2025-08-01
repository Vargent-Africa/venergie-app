import { postData } from "utils/api";

import { Cart, CreateCartInput } from "./types/cart";

export function createCart(input: CreateCartInput): Promise<Cart> {
	return postData("/carts", input);
}
