import { render } from "@testing-library/react";
import Season from "./Season";
import { BrowserRouter } from "react-router-dom";

describe("Season component", () => {
	it("should render correct element with correct value", () => {
		const season = 2018;
		const { getByTestId } = render(
			<BrowserRouter>
				<Season season={season} />
			</BrowserRouter>,
		);

		expect(getByTestId("season-text").textContent).toBe(`Season ${season}`);
		expect(getByTestId("arrow")).toBeInTheDocument();
	});
});
