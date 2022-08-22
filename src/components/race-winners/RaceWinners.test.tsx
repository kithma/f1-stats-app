import { render } from "@testing-library/react";
import RaceWinners from "./RaceWinners";
import { BrowserRouter } from "react-router-dom";

describe("Race winners list", () => {
	it("should be no race winners in initial load", async () => {
		const { queryByTestId } = render(
			<BrowserRouter>
				<RaceWinners />
			</BrowserRouter>,
		);

		expect(queryByTestId("winners-table")).not.toBeInTheDocument();
		expect(queryByTestId("spinner")).not.toBeInTheDocument();
	});
});
