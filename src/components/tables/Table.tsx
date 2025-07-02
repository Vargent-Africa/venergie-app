import * as styled from "./styles/table";

const Table = () => {
	return (
		<styled.TableWrapper>
			<styled.TableSearchWrapper>
				<styled.SearchContainer>
					<styled.SearchInput
						type="text"
						name="firstname"
						placeholder="Search..."
					/>
					<styled.SearchButton>Search</styled.SearchButton>
				</styled.SearchContainer>
			</styled.TableSearchWrapper>
			<styled.TableContainer>
				<styled.Table>
					<styled.TableHead>
						<styled.TableHeadRow>
							<styled.TableHeaderCell>Transfer ID</styled.TableHeaderCell>
							<styled.TableHeaderCell>Beneficiary</styled.TableHeaderCell>
							<styled.TableHeaderCell>Payout Method</styled.TableHeaderCell>
							<styled.TableHeaderCell>Sent Amount</styled.TableHeaderCell>
							<styled.TableHeaderCell>Payout Amount</styled.TableHeaderCell>
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
							<styled.TableDataCell>11223465351</styled.TableDataCell>
						</styled.TableBodyRow>
					</styled.TableBody>
				</styled.Table>
			</styled.TableContainer>
			<styled.TableExtra>
				<styled.TableExtraText>Download as CSV</styled.TableExtraText>
				{/* <Pagination /> */}
			</styled.TableExtra>
		</styled.TableWrapper>
	);
};

export default Table;
