"use client";
import { createContext, useState, useEffect } from "react";
import {
  Main,
  CardHeroes,
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

  const filteredHero = data
    ? data.filter((heroes) => heroes.name.toLowerCase().includes(searchHero))
    : [];

  const currentItems =
    filteredHero && filteredHero.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = filteredHero
    ? Math.ceil(filteredHero.length / itemsPerPage)
    : 0;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);

  const openModal = (hero) => {
    setSelectedHero(hero);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Main>
      <CardHeroes>
        <CardDividerTop />
        <ImagesPoster>
          {currentItems &&
            currentItems.map((hero, index) => {
              const powerstats = hero ? hero.powerstats : null;
              const cardTotal = powerstats
                ? Object.values(powerstats).reduce(
                    (acc, cur) => acc + parseInt(cur),
                    0
                  )
                : 0;

              return (
                <div key={index}>
                  <PosterContainer onClick={() => openModal(hero)}>
                    <PosterPath src={hero.images.lg} alt={hero.name} />
                    <h2>{hero.name}</h2>
                    <h2>{cardTotal}</h2>
                  </PosterContainer>
                </div>
              );
            })}
        </ImagesPoster>
        <CardDividerBottom />
      </CardHeroes>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {modalOpen && selectedHero && (
        <ModalCards
          closeModal={closeModal}
          selectedHero={selectedHero}
          // cardTotal={cardTotal}
        />
      )}
    </Main>
  );
};
export default Cards;
