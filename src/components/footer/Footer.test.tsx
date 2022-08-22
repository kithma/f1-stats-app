import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("footer component", () => {
	it("should render correct elemets", () => {
		const { getByTestId } = render(<Footer />);

		expect(getByTestId("github")).toHaveTextContent(
			"Github Repo: https://github.com/kithma/f1-stats-app",
		);
		expect(getByTestId("api")).toHaveTextContent("API Doc: http://ergast.com/mrd");
		expect(getByTestId("api-url")).toHaveAttribute("href", "http://ergast.com/mrd");
		expect(getByTestId("github-url")).toHaveAttribute(
			"href",
			"https://github.com/kithma/f1-stats-app",
		);
	});
});
