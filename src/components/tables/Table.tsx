import * as styled from "./styles/table";

type TableProps = {
	showSearch?: boolean;
	pageName?: string;
};

const Table = ({ showSearch = true, pageName = "" }: TableProps) => {
	return (
		<styled.TableWrapper>
			{showSearch && (
				<styled.TableSearchWrapper>
					<styled.SearchContainer>
						<styled.SearchInput
							type="text"
							name="firstname"
							placeholder={`Search ${pageName}`}
						/>
						<styled.SearchButton>Search</styled.SearchButton>
					</styled.SearchContainer>
				</styled.TableSearchWrapper>
			)}
			<styled.TableContainer>
				<styled.Table>
					<styled.TableHead>
						<styled.TableHeadRow>
							<styled.TableHeaderCell>Transfer ID</styled.TableHeaderCell>
							<styled.TableHeaderCell>Beneficiary</styled.TableHeaderCell>
							<styled.TableHeaderCell>Payout Method</styled.TableHeaderCell>
							<styled.TableHeaderCell>Sent Amount</styled.TableHeaderCell>
							<styled.TableHeaderCell>Date</styled.TableHeaderCell>
							<styled.TableHeaderCell>Status</styled.TableHeaderCell>
							<styled.TableHeaderCell>View</styled.TableHeaderCell>
						</styled.TableHeadRow>
					</styled.TableHead>
					<styled.TableBody>
						<styled.TableBodyRow>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
						</styled.TableBodyRow>
						<styled.TableBodyRow>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
						</styled.TableBodyRow>
						<styled.TableBodyRow>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
							<styled.TableDataCell>11223465351</styled.TableDataCell>
						</styled.TableBodyRow>
					</styled.TableBody>
				</styled.Table>
				<styled.TableExtraText>Download as CSV</styled.TableExtraText>
			</styled.TableContainer>
		</styled.TableWrapper>
	);
};

export default Table;
