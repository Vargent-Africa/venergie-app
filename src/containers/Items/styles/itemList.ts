import styled from "styled-components";
import { Link } from "react-router";

export const ListItemsWrapper = styled.section`
	margin: 1.6rem 0 3.2rem;
`;

export const ListItems = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	gap: 2.5rem;
	margin-top: 4rem;
`;

export const ListItem = styled(Link)`
	background-color: #e5e7eb;
	border-radius: 0.5rem;
	overflow: hidden;
`;

export const ListItemImg = styled.img`
	padding: 0.5rem;
	width: 100%;
	height: 30rem;
	object-fit: cover;
`;

export const ListItemDetails = styled.div`
	margin: 2rem;
`;

export const ListItemName = styled.p`
	font-weight: 300;
	font-size: 1.8rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	text-transform: capitalize;
`;

export const ListItemPrice = styled.span`
	margin-top: 0.8rem;
	display: block;
	font-size: 2rem;
	font-weight: 500;
`;
