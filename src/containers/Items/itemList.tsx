import { Fragment } from "react";

import * as common from "styles/ui";

import * as styled from "./styles/itemList";

const ItemList = () => {
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
			<styled.ListItemsWrapper>
				<common.Container>
					<styled.ListItems>
						<styled.ListItem to="items/1">
							<styled.ListItemImg src="/images/item1.png" />
							<styled.ListItemDetails>
								<styled.ListItemName>
									Skymax Solar Battery gdgdggd hdhdggd
								</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/2">
							<styled.ListItemImg src="/images/item2.png" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/3">
							<styled.ListItemImg src="/images/item1.png" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/4">
							<styled.ListItemImg src="/images/item3.png" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/5">
							<styled.ListItemImg src="/images/item4.jpg" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/6">
							<styled.ListItemImg src="/images/item1.png" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/7">
							<styled.ListItemImg src="/images/item3.png" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/8">
							<styled.ListItemImg src="/images/item4.jpg" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/9">
							<styled.ListItemImg src="/images/item1.png" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/10">
							<styled.ListItemImg src="/images/item3.png" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
						<styled.ListItem to="items/11">
							<styled.ListItemImg src="/images/item4.jpg" />
							<styled.ListItemDetails>
								<styled.ListItemName>Skymax Solar Battery</styled.ListItemName>
								<styled.ListItemPrice>£68.00</styled.ListItemPrice>
							</styled.ListItemDetails>
						</styled.ListItem>
					</styled.ListItems>
				</common.Container>
			</styled.ListItemsWrapper>
		</Fragment>
	);
};

export default ItemList;
