export const races = {
	MRData: {
		RaceTable: {
			Races: [
				{
					season: "2018",
					round: "1",
					raceName: "Super power",
					Results: [
						{
							number: "1",
							position: "2",
							points: "10",
							Driver: {
								driverId: "Mark",
								givenName: "Pete",
								familyName: "Mark",
							},
						},
					],
				},
				{
					season: "2018",
					round: "2",
					raceName: "Bahrain Grand Prix",
					Results: [
						{
							number: "1",
							position: "3",
							points: "12",
							Driver: {
								driverId: "Mathew",
								givenName: "Olen",
								familyName: "Mathew",
							},
						},
					],
				},
			],
		},
	},
};

export const seasonalWinner = {
	MRData: {
		StandingsTable: {
			StandingsLists: [
				{
					round: "13",
					season: "2022",
					DriverStandings: [
						{
							Driver: {
								driverId: "Mathew",
								givenName: "Olen",
								familyName: "Mathew",
							},
						},
					],
				},
			],
			season: "2022",
		},
	},
};
