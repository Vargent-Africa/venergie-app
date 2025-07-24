import { useQuery } from "@tanstack/react-query";

import { getItem, getItems } from "api/items";

export const useItemList = ({ page, limit, query }: PaginationOptions) => {
	return useQuery({
		queryKey: ["items", { page, limit, query }],
		queryFn: () => getItems({ page, limit, query }),
	});
};

export const useItemDetails = (id?: string) => {
	return useQuery({
		queryKey: ["items", id],
		queryFn: () => getItem(id),
	});
};
