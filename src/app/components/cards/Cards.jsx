"use client";
import { createContext, useState, useEffect } from "react";
import {
  Main,
  CardMovies,
  ImagesPoster,
  PosterPath,
  PosterContainer,
  CardDividerTop,
  CardDividerBottom,
} from "./CardsStyled";
import Pagination from "../../hooks/pagination";
import axios from "axios";
import ModalCards from "./ModalCards";

const Context = createContext();

const Cards = ({  searchHero }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;
  const [data, setData] = useState(null);

  useEffect(() => {
    const getHeroes = () => {
      axios
        .get("http://homologacao3.azapfy.com.br/api/ps/metahumans")
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getHeroes();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredVideos = data
    ? data.filter((videos) => videos.name.toLowerCase().includes(searchHero))
    : [];

  const currentItems =
    filteredVideos && filteredVideos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = filteredVideos
    ? Math.ceil(filteredVideos.length / itemsPerPage)
    : 0;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Main>
      <CardMovies>
        <CardDividerTop />
        <ImagesPoster>
          {currentItems &&
            currentItems.map((video, index) => {
              const powerstats = video ? video.powerstats : null;
              const cardTotal = powerstats
                ? Object.values(powerstats).reduce(
                    (acc, cur) => acc + parseInt(cur),
                    0
                  )
                : 0;

              return (
                <div key={index}>
                  <PosterContainer onClick={() => openModal(video)}>
                    <PosterPath src={video.images.lg} alt={video.name} />
                    <h2>{video.name}</h2>
                    <h2>{cardTotal}</h2>
                  </PosterContainer>
                </div>
              );
            })}
        </ImagesPoster>
        <CardDividerBottom />
      </CardMovies>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {modalOpen && selectedVideo && (
        <ModalCards
          closeModal={closeModal}
          selectedVideo={selectedVideo}
          // cardTotal={cardTotal}
        />
      )}
    </Main>
  );
};
export default Cards;
