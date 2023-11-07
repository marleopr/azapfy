"use client";
import { createContext, useState } from "react";
import { Main, RangeButton, SelectInput, RangeSelect } from "./HomePageStyled";
import Cards from "../components/cards/Cards";
import { TextField } from "@mui/material";
// import videosData from "../constants/videos.json";

const Context = createContext();

const HomePage = () => {
  // const [videos, setVideos] = useState(videosData.videos);
  // const [videos, setVideos] = useState();
  const [searchHero, setSearchHero] = useState("");

  const handleSearchHero = (event) => {
    setSearchHero(event.target.value);
  };

  return (
    <Main>
      <RangeButton>
        {/* <Button>Agências</Button>
        <Button>Chatbot</Button>
        <Button>Marketing Digital</Button>
        <Button>Geração de Leads</Button>
        <Button>Mídia Paga</Button> */}
        <TextField
          id="outlined-basic"
          label="Pesquisar Herói"
          name="text"
          autoComplete="off"
          type="text"
          value={searchHero.toLowerCase()}
          onChange={handleSearchHero}
        />
        {/* <RangeSelect></RangeSelect> */}
      </RangeButton>
      <Cards searchHero={searchHero} />
    </Main>
  );
};
export default HomePage;
