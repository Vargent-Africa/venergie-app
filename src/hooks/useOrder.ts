import { useQuery } from "@tanstack/react-query";

import { getUserOrders } from "api/orders";

export const useOrders = ({ page, limit, query }: PaginationOptions) => {
	return useQuery({
		queryKey: ["orders", { page, limit, query }],
		queryFn: () => getUserOrders({ page, limit, query }),
	});
};
