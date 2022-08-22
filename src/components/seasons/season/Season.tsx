import { Link } from "react-router-dom";
import { routes } from "../../../constants/Routes";

import "./Season.css";

interface Props {
	season: string;
}

const Season = ({ season }: Props) => {
	return (
		<Link to={routes.RACE_WINNERS.replace(":year", season.toString())}>
			<div className="season-wrapper">
				<p data-testid="season-text" className="season-wrapper__text">
					Season {season}
				</p>
				<img
					data-testid="arrow"
					className="season-wrapper__arrow-head"
					src={"/assets/icons/arrowHead.svg"}
					alt="arrow-icon"
				/>
			</div>
		</Link>
	);
};

export default Season;
