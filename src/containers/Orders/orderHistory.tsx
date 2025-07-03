import { useRef } from "react";
import { useSearchParams } from "react-router";

import Table from "components/tables/Table";
import Pagination from "components/navigation/Pagination";

import * as styled from "./styles/order";

const OrderHistory = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const page = searchParams.get("page") || "1";
	const limit = searchParams.get("limit") || "10";
	const pages = 12;
	const total = 120;

	const ref = useRef<HTMLInputElement>(null);

	const changePage = (num: number) => {
		if (!searchParams.get("query")) {
			setSearchParams({
				page: num.toString(),
			});
		} else {
			setSearchParams({
				query: ref.current?.value || "",
				page: num.toString(),
			});
		}
	};

	return (
		<styled.OrderWrapper>
			<styled.OrderHeader>Order History</styled.OrderHeader>
			<styled.OrderContainer>
				<Table
					pageName="Orders"
					pagination={
						<Pagination
							page={+page}
							pages={pages}
							limit={+limit}
							changePage={changePage}
							totalRecords={total}
						/>
					}
				/>
			</styled.OrderContainer>
		</styled.OrderWrapper>
	);
};

export default OrderHistory;
