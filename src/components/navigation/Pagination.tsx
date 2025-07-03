import * as styled from "./styles/pagination";

type PaginationProps = {
	page: number;
	pages: number;
	totalRecords?: number;
	limit: number;
	showDetails?: boolean;
	changePage: (num: number) => void;
};

const Pagination = ({
	page,
	pages,
	changePage,
	totalRecords,
	limit,
	showDetails = true,
}: PaginationProps) => {
	let middleNumbers;

	if (pages <= 5) {
		middleNumbers = [...Array(pages)].map((_, ind) => (
			<li key={ind + 1}>
				<styled.PaginationButton
					onClick={() => changePage(ind + 1)}
					disabled={page === ind + 1}
					active={page === ind + 1}
				>
					{ind + 1}
				</styled.PaginationButton>
			</li>
		));
	} else {
		const startValue = Math.floor((page - 1) / 5) * 5;

		const buttonList = [...Array(5)].map((_, ind) => (
			<li key={startValue + ind + 1}>
				<styled.PaginationButton
					onClick={() => changePage(startValue + ind + 1)}
					disabled={page === startValue + ind + 1}
					active={page === startValue + ind + 1}
				>
					{startValue + ind + 1}
				</styled.PaginationButton>
			</li>
		));

		middleNumbers = (
			<>
				{page > 5 && (
					<>
						<li>
							<styled.PaginationButton onClick={() => changePage(1)}>
								1
							</styled.PaginationButton>
						</li>
						<li>
							<styled.PaginationButton>...</styled.PaginationButton>
						</li>
						<li>
							<styled.PaginationButton onClick={() => changePage(startValue)}>
								{startValue}
							</styled.PaginationButton>
						</li>
					</>
				)}
				{buttonList}
				{pages - page >= 5 && (
					<>
						<li>
							<styled.PaginationButton>...</styled.PaginationButton>
						</li>
						<li>
							<styled.PaginationButton onClick={() => changePage(pages)}>
								{pages}
							</styled.PaginationButton>
						</li>
					</>
				)}
			</>
		);
	}

	return (
		<styled.PaginationWrapper>
			{showDetails && (
				<span>
					Showing {1 + (page - 1) * limit} to{" "}
					{page === pages ? totalRecords : page * limit} of {totalRecords}{" "}
					entries
				</span>
			)}
			<styled.PaginationList>
				<li>
					<styled.PaginationButton
						onClick={() => changePage(page - 1)}
						disabled={page === 1}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							width="20"
							height="20"
						>
							<path
								fillRule="evenodd"
								d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
								clipRule="evenodd"
							/>
						</svg>
					</styled.PaginationButton>
				</li>
				{middleNumbers}
				<li>
					<styled.PaginationButton
						onClick={() => changePage(page + 1)}
						disabled={page === pages}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							width="20"
							height="20"
						>
							<path
								fillRule="evenodd"
								d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
								clipRule="evenodd"
							/>
						</svg>
					</styled.PaginationButton>
				</li>
			</styled.PaginationList>
		</styled.PaginationWrapper>
	);
};

export default Pagination;
