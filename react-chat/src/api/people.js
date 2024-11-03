import { loadData, saveData } from "../utils/localstorage";
import { initialPeople } from "../utils/people";

export const loadPeople = () => {
    const data = loadData();
    if (!data.people) {
        data.people = initialPeople;
        saveData(data);
    }
    return data.people;
};