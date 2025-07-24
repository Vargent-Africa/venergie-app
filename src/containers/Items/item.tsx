import { useParams } from "react-router";

import QuantityControl from "components/misc/QuantityControl";
import { useCart } from "contexts/cartContext";
import { useItemDetails } from "hooks/useItem";
import NotFound from "containers/Info/NotFound";
import Loader from "components/misc/Loader";
import { numberFormat } from "utils/helpers";

import * as common from "styles/ui";

import * as styled from "./styles/item";

const Item = () => {
	const { showCart } = useCart();
	let { id } = useParams();
	const { isPending, isError, data: ItemData } = useItemDetails(id);

	if (isPending) return <Loader />;
	if (isError) return <NotFound />;

	return (
		<styled.ItemWrapper>
			<common.Container>
				<styled.ItemImgContainer>
					<styled.ItemMainImgContainer>
						<styled.ItemMainImg src="/images/item1.png" />
					</styled.ItemMainImgContainer>
					<styled.ItemRestImgContainer>
						<styled.ItemRestImg src="/images/item1.png" />
						<styled.ItemRestImg src="/images/item2.png" />
						<styled.ItemRestImg src="/images/item3.png" />
						<styled.ItemRestImg src="/images/item4.jpg" />
					</styled.ItemRestImgContainer>
				</styled.ItemImgContainer>
				<styled.ItemDetailsContainer>
					<styled.ItemTitle>{ItemData.name}</styled.ItemTitle>
					<styled.ItemPrice>{`${ItemData.currency} ${numberFormat(
						ItemData.price
					)}`}</styled.ItemPrice>
					<styled.QuantityContainer>
						<styled.QuantityLabel>QUANTITY</styled.QuantityLabel>
						<QuantityControl />
					</styled.QuantityContainer>
					<styled.AddCartBtn type="button" onClick={showCart}>
						ADD TO CART
					</styled.AddCartBtn>
					<styled.ItemDescriptionContainer>
						<styled.ItemDescriptionTitle>
							Product Details
						</styled.ItemDescriptionTitle>
						<styled.ItemDescriptionContentWrapper>
							<styled.ItemDescriptionContent>
								{ItemData.item_details}
							</styled.ItemDescriptionContent>
						</styled.ItemDescriptionContentWrapper>
					</styled.ItemDescriptionContainer>
				</styled.ItemDetailsContainer>
			</common.Container>
		</styled.ItemWrapper>
	);
};

export default Item;
