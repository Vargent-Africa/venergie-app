import Table from "components/tables/Table";
import Pagination from "components/navigation/Pagination";
import { usePaginationQuery } from "hooks/usePaginationQuery";

import * as styled from "./styles/order";

const OrderHistory = () => {
	const pages = 12;
	const total = 120;

	const { page, limit, changePage } = usePaginationQuery({});

	return (
		<styled.OrderWrapper>
			<styled.OrderHeader>Order History</styled.OrderHeader>
			<styled.OrderContainer>
				<Table pageName="Orders" />
				<Pagination
					page={+page}
					pages={pages}
					limit={+limit}
					changePage={changePage}
					totalRecords={total}
				/>
			</styled.OrderContainer>
		</styled.OrderWrapper>
	);
};

export default OrderHistory;
