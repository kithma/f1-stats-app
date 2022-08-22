import { render } from "@testing-library/react";
import BackButton from "./BackButton";
import { BrowserRouter } from "react-router-dom";

describe("back button component", () => {
	it("should render correct elemets", () => {
		const { getByTestId } = render(
			<BrowserRouter>
				<BackButton navigateTo={"/"} />
			</BrowserRouter>,
		);

		expect(getByTestId("button-text").textContent).toBe("Back");
	});
});
