import { RaceStore } from "../RaceStore";
import fetchMock from "jest-fetch-mock";
import { races, seasonalWinner } from "./fixtures/RaceFixtures";
import { Fetch } from "../../types";

describe("Seasons store", () => {
	beforeEach(() => {
		fetchMock.resetMocks();
	});

	const raceStore = new RaceStore(fetchMock as Fetch);
	const season = "2018";

	it("should fetch race winners", async () => {
		expect(raceStore.races).toBeDefined();
		expect(raceStore.seasonalWinner).toBe("");

		fetchMock.mockResponseOnce(JSON.stringify(races)); //Mockin the response from API call

		await raceStore.loadRaceWinners(season, 1);

		expect(raceStore.races).toEqual(races.MRData.RaceTable.Races);
		expect(raceStore.seasonalWinner).toBe("");
	});

	it("should fetch seasonal winner", async () => {
		expect(raceStore.races).toBeDefined();
		expect(raceStore.seasonalWinner).toBe("");

		fetchMock.mockResponseOnce(JSON.stringify(seasonalWinner));

		await raceStore.loadSeasonWinner(season);

		expect(raceStore.seasonalWinner).toBe(
			seasonalWinner.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings[0]?.Driver
				?.driverId,
		);
	});
});
