import { useRef } from "react";
import { useSearchParams } from "react-router";

type PaginationDefaults = {
	defaultLimit?: string;
};

export function usePaginationQuery({
	defaultLimit = "10",
}: PaginationDefaults) {
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get("query") || "";
	const page = searchParams.get("page") || "1";
	const limit = searchParams.get("limit") || defaultLimit;

	const ref = useRef<HTMLInputElement>(null);

	const changePage = (num: number) => {
		const nextParams: Record<string, string> = {
			page: num.toString(),
		};

		if (query) {
			nextParams.query = ref.current?.value || "";
		}

		setSearchParams(nextParams);
	};

	return {
		query,
		page,
		limit,
		changePage,
		ref,
	};
}
