import { useParams } from "react-router";

import QuantityControl from "components/misc/QuantityControl";
import { useCart } from "contexts/cartContext";
import { useItemDetails } from "hooks/useItem";
import NotFound from "containers/Info/NotFound";
import Loader from "components/misc/Loader";
import { numberFormat } from "utils/helpers";

import * as common from "styles/ui";

import * as styled from "./styles/item";
import { useState } from "react";

const Item = () => {
	const [quantity, setQuantity] = useState(1);
	const { addToCart, showCart } = useCart();
	let { id } = useParams();
	const { isPending, isError, data: itemData } = useItemDetails(id);

	const handleAddToCart = (cartItem: CartItem) => {
		const { itemId, itemName, unitPrice, quantity, maxQuantity, itemImg } =
			cartItem;
		addToCart({
			itemId,
			itemName,
			unitPrice,
			quantity,
			maxQuantity,
			itemImg,
		});

		showCart();
	};

	if (isPending) return <Loader />;
	if (isError) return <NotFound />;

	return (
		<styled.ItemWrapper>
			<common.Container>
				<styled.ItemImgContainer>
					<styled.ItemMainImgContainer>
						{itemData.images ? (
							<styled.ItemMainImg
								src={`${import.meta.env.VG_BUCKET_KEY}/${itemData.images[0]}`}
							/>
						) : (
							<styled.ItemMainImg src="/images/item-img.png" />
						)}
					</styled.ItemMainImgContainer>
					<styled.ItemRestImgContainer>
						{itemData.images &&
							itemData.images.map((item, ind) => (
								<styled.ItemRestImg
									key={ind}
									src={`${import.meta.env.VG_BUCKET_KEY}/${item}`}
								/>
							))}
					</styled.ItemRestImgContainer>
				</styled.ItemImgContainer>
				<styled.ItemDetailsContainer>
					<styled.ItemTitle>{itemData.name}</styled.ItemTitle>
					<styled.ItemPrice>{`${itemData.currency} ${numberFormat(
						itemData.price
					)}`}</styled.ItemPrice>
					<styled.QuantityContainer>
						<styled.QuantityLabel>QUANTITY</styled.QuantityLabel>
						<QuantityControl
							max={itemData.quantity}
							quantity={quantity}
							onChange={setQuantity}
						/>
					</styled.QuantityContainer>
					<styled.AddCartBtn
						type="button"
						onClick={() =>
							handleAddToCart({
								itemId: itemData.guid,
								itemName: itemData.name,
								quantity,
								unitPrice: itemData.price,
								maxQuantity: itemData.quantity,
								itemImg: itemData.images
									? `${import.meta.env.VG_BUCKET_KEY}/${itemData.images[0]}`
									: null,
							})
						}
					>
						ADD TO CART
					</styled.AddCartBtn>
					<styled.ItemDescriptionContainer>
						<styled.ItemDescriptionTitle>
							Product Details
						</styled.ItemDescriptionTitle>
						<styled.ItemDescriptionContentWrapper>
							<styled.ItemDescriptionContent>
								{itemData.item_details}
							</styled.ItemDescriptionContent>
						</styled.ItemDescriptionContentWrapper>
					</styled.ItemDescriptionContainer>
				</styled.ItemDetailsContainer>
			</common.Container>
		</styled.ItemWrapper>
	);
};

export default Item;
