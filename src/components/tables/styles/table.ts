import styled from "styled-components";

import { Colors } from "utils/colors";

export const TableWrapper = styled.section`
	margin-top: 2rem;
	padding-bottom: 2rem;
	background-color: ${Colors.white};
	border-radius: 6px;
	overflow: hidden;
`;

export const TableSearchWrapper = styled.div`
	padding: 4rem 0 2rem;
	border-bottom-width: 1px;
	border-bottom-color: #f5f6fa;
	width: 100%;
`;

export const SearchContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	padding: 0 4rem;

	@media (max-width: 768px) {
		width: 66.666667%;
	}

	/* @media (min-width: 640px) {
		width: 50%; 
		padding: 0 4rem;
	} */
`;

export const SearchInput = styled.input`
	flex: 1;
	width: 100%;
	height: 3.6rem;
	appearance: none;
	border: 1px solid #d7d7d7;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
	border-right: none;
	background-color: ${Colors.white};
	padding: 0 1.2rem;
	font-size: 1.4rem;
	color: #242424;
	line-height: 1.25;
	outline: none;

	&::placeholder {
		font-style: italic;
		color: #aaa;
	}

	&:focus {
		box-shadow: none;
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
`;

export const SearchButton = styled.button`
	width: 8rem;
	height: 3.6rem;
	border: 1px solid #d7d7d7;
	border-left: none;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1.2rem;
	font-size: 1.4rem;
	cursor: pointer;
	background-color: white;
`;

export const TableContainer = styled.div`
	padding: 2rem 4rem 0;

	@media (max-width: 768px) {
		padding: 0 2.4rem;
	}
`;

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	font-size: 1.2rem;
	font-weight: 400;
	table-layout: fixed;
`;

export const TableHead = styled.thead`
	border: 1px solid #f5f6fa;
	border-left: none;
	border-right: none;
`;

export const TableHeadRow = styled.tr`
	text-align: left;
	font-weight: 600;

	& > * {
		padding: 1.6rem;
	}
`;

export const TableHeaderCell = styled.th`
	display: table-cell;
`;

export const TableBody = styled.tbody`
	font-weight: 300;
	overflow-wrap: break-word;
`;

export const TableBodyRow = styled.tr`
	text-align: left;
	border-bottom-width: 1px;
	border-bottom-color: #f5f6fa;
	border-bottom-style: solid;
`;

export const TableDataCell = styled.td`
	padding: 1.6rem;
	font-size: 1.3rem;
`;

export const TableExtraText = styled.h3`
	font-size: 1.2rem;
	cursor: pointer;
	padding: 0.8rem 0;
	margin-top: 2rem;
	display: inline-block;
`;
