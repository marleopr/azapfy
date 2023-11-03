"use client";
import { createContext, useState } from "react";
import {
  Main,
  RangeButton,
  Button,
  SelectInput,
  RangeSelect,
} from "./HomePageStyled";
import Cards from "../components/cards/Cards";
// import videosData from "../constants/videos.json";

const Context = createContext();

const HomePage = () => {
  // const [videos, setVideos] = useState(videosData.videos);
  const [videos, setVideos] = useState();

  return (
    <Main>
      <RangeButton>
        <Button>Agências</Button>
        <Button>Chatbot</Button>
        <Button>Marketing Digital</Button>
        <Button>Geração de Leads</Button>
        <Button>Mídia Paga</Button>
        <RangeSelect>
          Ordenar por
          <SelectInput>
            <option>Data de Publicação</option>
          </SelectInput>
        </RangeSelect>
      </RangeButton>
      <Cards videos={videos} />
    </Main>
  );
};
export default HomePage;
