"use client";
import { createContext, useState } from "react";
import { Main, RangeButton } from "./HomePageStyled";
import Cards from "../components/cards/Cards";
import { TextField } from "@mui/material";
import EasterEgg from "../components/EasterEgg";

const Context = createContext();

const HomePage = () => {
  const [searchHero, setSearchHero] = useState("");

  const handleSearchHero = (event) => {
    setSearchHero(event.target.value);
  };

  return (
    <Main>
      <EasterEgg />
      <RangeButton>
        <TextField
          id="outlined-basic"
          label="Pesquisar Herói"
          name="text"
          autoComplete="off"
          type="text"
          value={searchHero.toLowerCase()}
          onChange={handleSearchHero}
        />
      </RangeButton>
      <Cards searchHero={searchHero} />
    </Main>
  );
};
export default HomePage;
