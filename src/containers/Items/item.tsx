import QuantityControl from "components/misc/QuantityControl";
import { useCart } from "contexts/cartContext";

import * as common from "styles/ui";

import * as styled from "./styles/item";

const Item = () => {
	const { showCart } = useCart();
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
					<styled.ItemTitle>
						The Replenish and Restore New Mom/Postpartum Gift Box
					</styled.ItemTitle>
					<styled.ItemPrice>£205.00</styled.ItemPrice>
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
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
								molestias veniam omnis ipsa voluptates labore totam similique
								quas fugiat alias, praesentium harum optio ad dolorum dolorem
								ea. Consectetur, eaque alias.
							</p>
							<styled.ItemDescriptionContent>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
								quaerat aliquam, similique qui minus placeat enim sed modi
								delectus, quam fugit molestiae fuga sunt veniam, inventore quae
								libero velit. Reiciendis, assumenda voluptatem ducimus commodi
								labore illo nemo qui unde, possimus quaerat nulla! Quidem animi
								itaque ad voluptas obcaecati repellendus. Commodi.
							</styled.ItemDescriptionContent>
							<styled.ItemDescriptionContent>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
								quaerat aliquam, similique qui minus placeat enim sed modi
								delectus, quam fugit molestiae fuga sunt veniam, inventore quae
								libero velit. Reiciendis, assumenda voluptatem ducimus commodi
								labore illo nemo qui unde, possimus quaerat nulla! Quidem animi
								itaque ad voluptas obcaecati repellendus. Commodi.
							</styled.ItemDescriptionContent>
							<styled.ItemDescriptionContent>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
								quaerat aliquam, similique qui minus placeat enim sed modi
								delectus, quam fugit molestiae fuga sunt veniam, inventore quae
								libero velit. Reiciendis, assumenda voluptatem ducimus commodi
								labore illo nemo qui unde, possimus quaerat nulla! Quidem animi
								itaque ad voluptas obcaecati repellendus. Commodi.
							</styled.ItemDescriptionContent>
							<styled.ItemDescriptionContent>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
								quaerat aliquam, similique qui minus placeat enim sed modi
								delectus, quam fugit molestiae fuga sunt veniam, inventore quae
								libero velit. Reiciendis, assumenda voluptatem ducimus commodi
								labore illo nemo qui unde, possimus quaerat nulla! Quidem animi
								itaque ad voluptas obcaecati repellendus. Commodi.
							</styled.ItemDescriptionContent>
						</styled.ItemDescriptionContentWrapper>
					</styled.ItemDescriptionContainer>
				</styled.ItemDetailsContainer>
			</common.Container>
		</styled.ItemWrapper>
	);
};

export default Item;
