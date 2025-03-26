import styled from "styled-components";

import { Colors } from "utils/colors";

export const ItemWrapper = styled.section`
	margin: 4rem 0 12.8rem;
`;

export const ItemImgContainer = styled.div`
	width: 100%;
	float: none;
	margin-right: 4rem;
	margin-bottom: 2rem;

	@media (min-width: 768px) {
		float: left;
		width: 40rem;
	}

	@media (min-width: 1024px) {
		width: 60rem;
	}
`;

export const ItemMainImgContainer = styled.div`
	width: 100%;
	height: 37rem;
	border-radius: 0.6rem;
	overflow: hidden;

	@media (min-width: 768px) {
		height: 35rem;
	}

	@media (min-width: 1024px) {
		height: 45rem;
	}
`;

export const ItemMainImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ItemRestImgContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 0.8rem;
	margin-top: 2.4rem;

	@media (min-width: 640px) {
		gap: 1.6rem;
	}
`;

export const ItemRestImg = styled.img`
	width: 100%;
	height: 9.6rem;
	object-fit: cover;
	border-radius: 0.6rem;

	@media (min-width: 640px) {
		height: 9.6rem;
	}
`;

export const ItemDetailsContainer = styled.div``;

export const ItemTitle = styled.h2`
	font-size: 2.4rem;
	font-weight: 300;
`;

export const ItemPrice = styled.p`
	font-size: 3rem;
	margin-top: 1.6rem;
	font-weight: 500;
`;

export const QuantityContainer = styled.div``;

export const QuantityLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	font-weight: 500;
	margin-top: 1.5rem;
`;

export const QuantityControls = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-width: 1px;
	width: 10rem;
	padding: 0.8rem 0;
`;

export const QuantityBtn = styled.button`
	border-width: 0px;
	background-color: transparent;
	cursor: pointer;
	font-size: 2rem;
	padding: 0.2rem 0.6rem;
	outline: 2px solid transparent;
	outline-offset: 2px;
`;

export const Quantity = styled.span`
	padding: 0 0.8rem;
	text-align: center;
	font-size: 1.8rem;
`;

export const AddCartBtn = styled.button`
	color: ${Colors.white};
	font-size: 1.4rem;
	font-weight: 500;
	padding: 1.6rem 2rem;
	margin-top: 1.5rem;
	background-color: ${Colors.black};
	border-radius: 5rem;
	cursor: pointer;
`;

export const ItemDescriptionContainer = styled.div`
	margin-top: 3rem;
`;

export const ItemDescriptionTitle = styled.h2`
	font-size: 2.4rem;
	font-weight: 300;
`;

export const ItemDescriptionContentWrapper = styled.div`
	margin-top: 2rem;
`;

export const ItemDescriptionContent = styled.p`
	font-size: 1.7rem;
`;
