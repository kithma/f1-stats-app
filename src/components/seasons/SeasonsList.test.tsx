import { render } from "@testing-library/react";
import Seasons, { getSeasons } from "./SeasonsList";
import { BrowserRouter } from "react-router-dom";

describe("Seasons list", () => {
	it("should render correct elements", () => {
		const { getByTestId } = render(
			<BrowserRouter>
				<Seasons />
			</BrowserRouter>,
		);

		expect(getByTestId("header").textContent).toBe("F1 Racing Stats");
		expect(getByTestId("header-img")).toBeInTheDocument();
		expect(getByTestId("seasons-container")).toBeInTheDocument();
	});

	it("should return array of years", () => {
		const result = getSeasons();
		const currentYear = new Date().getFullYear();

		expect(result[0]).toBe(currentYear);
		expect(result[result.length - 1]).toBe(2005);
	});
});
