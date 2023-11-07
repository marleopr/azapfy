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
// import { Button } from "@mui/material";

const Context = createContext();

const Cards = ({ searchHero }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;
  const [data, setData] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);

  const toggleCardSelection = (hero) => {
    if (selectedCards.length === 2) {
      // Se já houver 2 cards selecionados, limpe a seleção.
      setSelectedCards([]);
    } else if (selectedCards.includes(hero)) {
      // Remova o card se ele já estiver selecionado.
      setSelectedCards(
        selectedCards.filter((selectedHero) => selectedHero !== hero)
      );
    } else {
      // Adicione o card à seleção.
      setSelectedCards([...selectedCards, hero]);
    }
  };

  const battleCards = () => {
    if (selectedCards.length === 2) {
      const [card1, card2] = selectedCards;
      const card1Total = Object.values(card1.powerstats).reduce(
        (acc, cur) => acc + parseInt(cur),
        0
      );
      const card2Total = Object.values(card2.powerstats).reduce(
        (acc, cur) => acc + parseInt(cur),
        0
      );

      if (card1Total > card2Total) {
        alert(`${card1.name} é o vencedor!`);
      } else if (card2Total > card1Total) {
        alert(`${card2.name} é o vencedor!`);
      } else {
        alert("Empate!");
      }
      setSelectedCards([]);
    } else {
      alert("Selecione exatamente 2 cards para a batalha.");
    }
  };

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
        {/* <Button onClick={battleCards}>Iniciar Batalha</Button> */}

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
              // const isSelected = selectedCards.includes(hero);

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
          toggleCardSelection={() => toggleCardSelection(selectedHero)}
          battleCards={battleCards}
          selectedCards={selectedCards}
          // cardTotal={cardTotal}
        />
      )}
    </Main>
  );
};
export default Cards;
