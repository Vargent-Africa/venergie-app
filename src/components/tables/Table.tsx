import { useMemo } from "react";

import * as styled from "./styles/table";

type TableProps<T> = {
	tableData: T[];
	searchTerm?: string;
	showSearch?: boolean;
	pageName?: string;
	searchRef?: React.RefObject<HTMLInputElement | null>;
	handleClick?: () => void;
	handleClear?: () => void;
};

export const Table = <T extends Record<string, any>>({
	tableData,
	searchTerm = "",
	showSearch = true,
	pageName = "",
	searchRef,
	handleClick,
	handleClear,
}: TableProps<T>) => {
	// Extract column headers from first row
	const columns = useMemo(() => {
		if (tableData.length === 0) return [];
		return Object.keys(tableData[0]);
	}, [tableData]);

	return (
		<styled.TableWrapper>
			{showSearch && (
				<styled.TableSearchWrapper>
					<styled.SearchContainer>
						<styled.SearchInput
							type="text"
							name="query"
							placeholder={`Search ${pageName}`}
							ref={searchRef}
						/>
						{searchTerm && (
							<styled.ClearSearchWrapper onClick={handleClear}>
								<styled.ClearSearchIcon
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</styled.ClearSearchIcon>
							</styled.ClearSearchWrapper>
						)}
						<styled.SearchButton onClick={handleClick}>
							Search
						</styled.SearchButton>
					</styled.SearchContainer>
				</styled.TableSearchWrapper>
			)}
			<styled.TableContainer>
				<styled.Table>
					<styled.TableHead>
						<styled.TableHeadRow>
							{columns?.map((col, idx) => (
								<styled.TableHeaderCell key={idx}>
									{col.replace(/_/g, " ")}
								</styled.TableHeaderCell>
							))}
							<styled.TableHeaderCell key="view-header">
								View Details
							</styled.TableHeaderCell>
						</styled.TableHeadRow>
					</styled.TableHead>
					<styled.TableBody>
						{tableData?.map((row, idx) => (
							<styled.TableBodyRow key={idx}>
								{columns.map((col, idx) => (
									<styled.TableDataCell key={idx}>
										{String(row[col])}
									</styled.TableDataCell>
								))}
								<styled.TableDataCell key="view-data">
									View
								</styled.TableDataCell>
							</styled.TableBodyRow>
						))}
					</styled.TableBody>
				</styled.Table>
				<styled.TableExtraText>Download as CSV</styled.TableExtraText>
			</styled.TableContainer>
		</styled.TableWrapper>
	);
};

export default Table;
