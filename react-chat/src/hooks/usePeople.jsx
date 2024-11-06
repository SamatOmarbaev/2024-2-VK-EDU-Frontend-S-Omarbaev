import { useEffect, useState } from "react";
import { loadPeople } from "../api/people";

export const usePeople = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchedPeople = loadPeople();
    setPeople(fetchedPeople);
  }, []);

  return people;
};
