import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { useStore } from "../../stores/StoreContext";
import BackButton from "../shared/back-button/BackButton";
import Spinner from "../shared/Spinner";
import { routes } from "../../constants/Routes";
import Pagination from "../shared/pagination/Pagination";
import { PAGE_LIMIT } from "../../constants/PageConstants";

import "../shared/Styles.css";
import "./RaceWinners.css";

const RaceWinners = observer(() => {
	const [pageNumber, setPageNumer] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	const params = useParams();
	const { raceStore } = useStore();
	const { races, seasonalWinner, totalCount } = raceStore;

	// To get the data when the component is mounting
	useEffect(() => {
		onInitialLoad();
	}, []);

	const onInitialLoad = async () => {
		await Promise.all([
			raceStore.loadRaceWinners(params.year as string, pageNumber),
			raceStore.loadSeasonWinner(params.year as string),
		]);
		setIsLoading(false);
	};

	const onClickPage = (page: number) => {
		setPageNumer(page);
		raceStore.loadRaceWinners(params.year as string, page);
	};

	return (
		<div className="race-winners-wrapper">
			<BackButton navigateTo={routes.ROOT} />
			<div className="race-winners-wrapper__table-container">
				<h2>{params.year} Season Race Winners</h2>
				<div className="race-winners-wrapper__table-container__info">
					<div className="race-winners-wrapper__table-container__btn" />
					<p className="race-winners-wrapper__table-container__text">Seasonal winner</p>
				</div>
				{isLoading && <Spinner />}
				{!isLoading && races.length > 0 && (
					<>
						<table data-testid="winners-table">
							<thead>
								<tr>
									<th>Round</th>
									<th>Race</th>
									<th>Winner</th>
								</tr>
							</thead>
							<tbody>
								{races.map((race) => {
									const { familyName, givenName, driverId } = race.Results[0].Driver;
									return (
										<tr
											key={race.round}
											className={`${seasonalWinner === driverId ? "highlight" : ""}`}
										>
											<td>{race.round}</td>
											<td>{race.raceName}</td>
											<td>{`${givenName} ${familyName}`}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						{totalCount > PAGE_LIMIT && (
							<Pagination
								totalCount={totalCount}
								limit={PAGE_LIMIT}
								currentPageNumber={pageNumber}
								onClickPage={onClickPage}
							/>
						)}
					</>
				)}
				{!isLoading && races.length === 0 && (
					<p className="race-winners-wrapper__no-items">No Winners found</p>
				)}
			</div>
		</div>
	);
});

export default RaceWinners;
