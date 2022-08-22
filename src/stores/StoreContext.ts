import React from "react";
import { RaceStore } from "./RaceStore";

const fetch = window.fetch.bind(window);

interface StoreContextType {
	raceStore: RaceStore;
}

const raceStore = new RaceStore(fetch);

export const StoreContext = React.createContext<StoreContextType>({
	raceStore,
});

// Make it possible to use stores from any component
export const useStore = () => React.useContext(StoreContext);
