import Season from "./season/Season";
import "./SeasonsList.css";

const Seasons = () => {
	return (
		<div className="seasons-wrapper">
			<div className="seasons-wrapper__title">
				<h1 data-testid="header" className="seasons-wrapper__title__text">
					F1 Racing Stats
				</h1>
				<img
					src="/assets/icons/car.svg"
					alt="car-icon"
					data-testid="header-img"
					className="seasons-wrapper__title__icon"
				/>
			</div>
			<div data-testid="seasons-container" className="seasons-wrapper__seasons">
				{getSeasons().map((season) => {
					return <Season key={season} season={season} />;
				})}
			</div>
		</div>
	);
};

export const getSeasons = (): number[] => {
	const currentYear = new Date().getFullYear();
	const seasons: number[] = [];

	let year = currentYear;

	while (year >= 2005) {
		seasons.push(year);
		year--;
	}

	return seasons;
};

export default Seasons;
