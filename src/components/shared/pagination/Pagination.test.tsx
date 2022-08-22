import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";
import { PAGE_LIMIT } from "../../../constants/PageConstants";

describe("pagination page", () => {
	it("should render correct elemets", () => {
		const onClickPage = jest.fn();

		const { getByTestId, queryByTestId } = render(
			<Pagination
				totalCount={20}
				limit={PAGE_LIMIT}
				currentPageNumber={1}
				onClickPage={onClickPage}
			/>,
		);

		expect(getByTestId("page-1")).toHaveTextContent("1");
		expect(getByTestId("page-2")).toHaveTextContent("2");
		expect(queryByTestId("page-3")).not.toBeInTheDocument();
	});

	it("should be able to click on page buttons", () => {
		const onClickPage = jest.fn();

		const { getByTestId } = render(
			<Pagination
				totalCount={20}
				limit={PAGE_LIMIT}
				currentPageNumber={1}
				onClickPage={onClickPage}
			/>,
		);
		const page = getByTestId("page-2");

		fireEvent.click(page);
		expect(onClickPage).toBeCalled();
	});
});
