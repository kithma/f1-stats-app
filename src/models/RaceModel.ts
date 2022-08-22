export interface RaceModel {
	season: string;
	round: string;
	raceName: string;
	Results: Result[];
}

interface Result {
	number: string;
	position: string;
	points: string;
	Driver: Driver;
}

interface Driver {
	driverId: string;
	givenName: string;
	familyName: string;
}
