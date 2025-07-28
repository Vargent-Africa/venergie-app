import { Fragment } from "react";
import { toast } from "react-toastify";

import Table from "components/tables/Table";
import Pagination from "components/navigation/Pagination";
import Loader from "components/misc/Loader";
import EmptyState from "components/misc/EmptyState";
import { usePaginationQuery } from "hooks/usePaginationQuery";
import { useOrders } from "hooks/useOrder";

import * as common from "styles/ui";

import * as styled from "./styles/order";

// const ordersEx = [
// 	{ orderId: "A001", customerName: "Alice", totalAmount: 150 },
// 	{ orderId: "A002", customerName: "Bob", totalAmount: 200 },
// ];

const OrderHistory = () => {
	const { query, page, limit, ref, changePage, handleClick, handleClear } =
		usePaginationQuery({
			defaultLimit: "50",
		});

	const {
		isLoading,
		isError,
		error,
		data: orderData,
	} = useOrders({ page: +page, limit: +limit, query });

	if (isLoading) return <Loader />;
	if (isError) {
		return toast.error(error.message);
	}

	const { pages, total, data: orders } = orderData!;

	return (
		<styled.OrderWrapper>
			<styled.OrderHeader>Order History</styled.OrderHeader>
			<styled.OrderContainer>
				{orders.length === 0 ? (
					<common.Container>
						<EmptyState content="No Orders" />
					</common.Container>
				) : (
					<Fragment>
						<Table
							pageName="Orders"
							tableData={orders}
							searchTerm={query}
							searchRef={ref}
							handleClick={handleClick}
							handleClear={handleClear}
						/>
						<Pagination
							page={+page}
							pages={pages}
							limit={+limit}
							changePage={changePage}
							totalRecords={total}
						/>
					</Fragment>
				)}
			</styled.OrderContainer>
		</styled.OrderWrapper>
	);
};

export default OrderHistory;
