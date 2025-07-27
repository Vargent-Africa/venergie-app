import { getData } from "utils/api";
import { Order } from "./types/order";

export function getUserOrders({
	page = 1,
	limit = 10,
	query = "",
}: PaginationOptions): Promise<PaginationResult<Order>> {
	return getData(`/orders?query=${query}&page=${page}&limit=${limit}`);
}
