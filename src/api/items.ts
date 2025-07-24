import { getData } from "utils/api";

import { Item } from "./types/item";

export function getItems({
	page = 1,
	limit = 10,
	query = "",
}: PaginationOptions): Promise<PaginationResult<Item>> {
	return getData(`/items?query=${query}&page=${page}&limit=${limit}`);
}

export function getItem(guid?: string): Promise<Item> {
	return getData(`/items/${guid}`);
}
