import { useMemo } from "react";
import "./Pagination.css";

interface Props {
	totalCount: number;
	limit: number;
	currentPageNumber: number;
	onClickPage: (pageNumber: number) => void;
}

// Reusable pagination component
const Pagination = ({ totalCount, limit, currentPageNumber, onClickPage }: Props) => {
	const numberOfPages = Math.ceil(totalCount / limit);

	// useMemo - Not to calculate the values on every render but only when totalCount/limit changes
	const pageNumbers = useMemo(() => {
		const pageNumbers: number[] = [];

		for (let i = 1; i < numberOfPages + 1; i++) {
			pageNumbers.push(i);
		}
		return pageNumbers;
	}, [totalCount, limit]);

	return (
		<div className="pagination-wrapper">
			<img
				src={"/assets/icons/arrowHead.svg"}
				className={`pagination-wrapper__left-arrow ${1 === currentPageNumber ? "disable" : ""}`}
				onClick={() => (1 !== currentPageNumber ? onClickPage(currentPageNumber - 1) : null)}
			/>
			{pageNumbers?.map((pageNumber) => (
				<p
					data-testid={`page-${pageNumber}`}
					key={pageNumber}
					className={`pagination-wrapper__page-button ${
						pageNumber === currentPageNumber ? "active" : ""
					}`}
					onClick={() => onClickPage(pageNumber)}
				>
					{pageNumber}
				</p>
			))}
			<img
				src={"/assets/icons/arrowHead.svg"}
				className={`pagination-wrapper__right-arrow ${
					pageNumbers[pageNumbers.length - 1] === currentPageNumber ? "disable" : ""
				}`}
				onClick={() =>
					pageNumbers[pageNumbers.length - 1] !== currentPageNumber
						? onClickPage(currentPageNumber + 1)
						: null
				}
			/>
		</div>
	);
};

export default Pagination;
