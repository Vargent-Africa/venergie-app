import styled from "styled-components";

import { Colors } from "utils/colors";

export const ListItemsWrapper = styled.section`
	margin: 1.6rem 0 3.2rem;
`;

export const ListItems = styled.section`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 2rem;
	margin-top: 4rem;

	@media (max-width: 896px) {
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	@media (max-width: 640px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	@media (max-width: 440px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const ListItem = styled.div`
	background-color: ${Colors.white};
	border-radius: 0.5rem;
	overflow: hidden;
`;

export const ListItemImg = styled.img`
	padding: 0.5rem;
	width: 100%;
	height: 20rem;
	object-fit: cover;

	@media (max-width: 640px) {
		height: 18rem;
	}
`;

export const ListItemDetails = styled.div`
	margin: 1rem 1rem 1.5rem;
`;

export const ListItemName = styled.span`
	display: block;
	font-weight: 300;
	font-size: 1.8rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	text-transform: capitalize;
`;

export const ListItemPrice = styled.span`
	margin-top: 0.5rem;
	display: block;
	font-size: 2rem;
	font-weight: 500;
`;
