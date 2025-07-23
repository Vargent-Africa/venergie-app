import { useQuery } from "@tanstack/react-query";

import { getItems } from "api/items";

export const useItemList = ({ page, limit, query }: PaginationOptions) => {
	return useQuery({
		queryKey: ["items", { page, limit, query }],
		queryFn: () => getItems({ page, limit, query }),
	});
};
