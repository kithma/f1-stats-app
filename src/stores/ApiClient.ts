import { Fetch } from "../types";

export const doRequest = async (fetch: Fetch, url: string) => {
	const apiRoot = `https://ergast.com/api/f1`;

	const response = await fetch(`${apiRoot}/${url}`);

	return await response.json();
};
