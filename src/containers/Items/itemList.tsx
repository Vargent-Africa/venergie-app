import { Fragment, useRef } from "react";
import { Link, useSearchParams } from "react-router";
import { toast } from "react-toastify";

import { useItemList } from "hooks/useItemList";
import Loader from "components/misc/Loader";
import EmptyState from "components/misc/EmptyState";
import Pagination from "components/navigation/Pagination";
import { numberFormat } from "utils/helpers";

import * as common from "styles/ui";

import * as styled from "./styles/itemList";

const ItemList = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get("query") || "";
	const page = searchParams.get("page") || "1";
	const limit = searchParams.get("limit") || "50";

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

	const {
		isLoading,
		isError,
		error,
		data: itemsData,
	} = useItemList({ page: +page, limit: +limit, query });

	if (isLoading) return <Loader />;
	if (isError) {
		return toast.error(error.message);
	}

	return (
		<Fragment>
			<common.PageTitleWrapper>
				<common.Container>
					<common.PageTitle>All Items</common.PageTitle>
					<common.PageTitleDescription>
						Items in stock
					</common.PageTitleDescription>
				</common.Container>
			</common.PageTitleWrapper>
			{itemsData?.data?.length === 0 ? (
				<common.Container>
					<EmptyState content="No Item" />
				</common.Container>
			) : (
				<Fragment>
					<styled.ListItemsWrapper>
						<common.Container>
							<styled.ListItems>
								{itemsData?.data?.map((item) => (
									<styled.ListItem key={item.guid}>
										<Link to="items/1">
											<styled.ListItemImg src="/images/item1.png" />
											<styled.ListItemDetails>
												<styled.ListItemName>{item.name}</styled.ListItemName>
												<styled.ListItemPrice>
													{`${item.currency} ${numberFormat(item.price)}`}
												</styled.ListItemPrice>
											</styled.ListItemDetails>
										</Link>
									</styled.ListItem>
								))}
							</styled.ListItems>
						</common.Container>
					</styled.ListItemsWrapper>
					<common.Container>
						<Pagination
							page={+page}
							pages={itemsData!.pages}
							limit={+limit}
							changePage={changePage}
							totalRecords={itemsData!.total}
						/>
					</common.Container>
				</Fragment>
			)}
		</Fragment>
	);
};

export default ItemList;
