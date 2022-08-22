import { ObservableMap, observable, IObservableValue, action, runInAction } from "mobx";
import { RaceModel } from "../models/RaceModel";
import { doRequest } from "./ApiClient";
import { Fetch } from "../types";
import { PAGE_LIMIT } from "../constants/PageConstants";
import { errorToast } from "../components/shared/Toast";

export class RaceStore {
	fetch: Fetch;

	constructor(fetch: Fetch) {
		this.fetch = fetch; // To differentiate mockFetch for testing and fetch API for runtime
	}

	@observable
	private _racesRegistry: ObservableMap<string, RaceModel> = observable.map();

	@observable
	private _seasonalWinner: IObservableValue<string> = observable.box("");

	@observable
	private _totalCount: IObservableValue<number> = observable.box(0);

	get races(): RaceModel[] {
		return Array.from(this._racesRegistry.values());
	}

	get seasonalWinner(): string {
		return this._seasonalWinner.get();
	}

	get totalCount(): number {
		return this._totalCount.get();
	}

	@action
	async loadRaceWinners(season: string, pageNumber: number) {
		const offset = PAGE_LIMIT * (pageNumber - 1);
		runInAction(() => {
			this._racesRegistry.clear(); //To prevent new data being append to the map
		});

		try {
			const response = await doRequest(
				this.fetch,
				`${season}/results/1.json?limit=${PAGE_LIMIT}&offset=${offset}`,
			);
			runInAction(() => {
				this._totalCount.set(parseInt(response?.MRData.total));
				response?.MRData?.RaceTable?.Races?.forEach((race: RaceModel) => {
					this._racesRegistry.set(race.round, race);
				});
			});
		} catch (err) {
			errorToast("Cannot get winners list, please try again later");
		}
	}

	@action
	async loadSeasonWinner(season: string) {
		try {
			const response = await doRequest(this.fetch, `${season}/driverStandings.json`);

			runInAction(() =>
				this._seasonalWinner.set(
					response?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings[0]?.Driver
						?.driverId,
				),
			);
		} catch (err) {
			errorToast("Cannot get seasonal winner, please try again later");
		}
	}
}
