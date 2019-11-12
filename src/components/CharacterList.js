import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`

    axios
      .get("https://rick-api.herokuapp.com/api/")
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
        // console.log(setCharacters)
      })
      .catch(err => {
        console.log("API unavailable", err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(char => {
        return <CharacterCard key={char.id} {...char} />;
      })}
    </section>
  );
}