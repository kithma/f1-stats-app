import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Season from "./seasons/SeasonsList";
import RaceWinners from "./race-winners/RaceWinners";
import { routes } from "../constants/Routes";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path={routes.ROOT} element={<Season />} />
				<Route path={routes.RACE_WINNERS} element={<RaceWinners />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
