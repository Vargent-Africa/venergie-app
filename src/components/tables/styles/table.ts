import styled from "styled-components";

import { Colors } from "utils/colors";
import { Sizes } from "utils/screenSizes";

export const TableWrapper = styled.section`
	margin-top: 2rem;
	padding-bottom: 2rem;
	background-color: ${Colors.white};
	overflow-x: auto;
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

	@media (max-width: 1000px) {
		width: 70%;
	}

	@media (max-width: ${Sizes.md}) {
		width: 100%;
	}
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
	/* padding: 2rem 0 0; */
	overflow-x: auto;
	height: calc(100vh - 25rem);
	scrollbar-width: none;
`;

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	font-size: 1.2rem;
	font-weight: 400;
`;

export const TableHead = styled.thead`
	border: 1px solid #f5f6fa;
	border-left: none;
	border-right: none;
	position: sticky;
	z-index: 2;
	top: 0;
	background-color: ${Colors.white};
`;

export const TableHeadRow = styled.tr`
	text-align: left;
	font-weight: 600;
	font-size: 1.3rem;

	& > * {
		padding: 1.6rem;
	}
`;

export const TableHeaderCell = styled.th`
	display: table-cell;

	&:nth-child(1) {
		position: sticky;
		left: 0;
		background-color: ${Colors.white};
	}
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

	&:nth-child(even) td {
		background: #eee;
	}
`;

export const TableDataCell = styled.td`
	padding: 1.6rem;
	font-size: 1.3rem;

	&:nth-child(1) {
		position: sticky;
		left: 0;
		background-color: ${Colors.white};
	}
`;

export const TableExtraText = styled.h3`
	font-size: 1.2rem;
	cursor: pointer;
	padding: 0.8rem 0;
	margin-top: 2rem;
	display: inline-block;
`;
