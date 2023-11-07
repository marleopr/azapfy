"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import {
  Main,
  CardHeroes,
  ImagesPoster,
  PosterPath,
  PosterContainer,
  CardDividerTop,
  CardDividerBottom,
  ContainerPaginator,
} from "./CardsStyled";
import ModalCards from "../modais/ModalCards";
import Pagination from "../../hooks/pagination";
import { FaChevronCircleUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/ps/metahumans`);
        setData(res.data);
      } catch (error) {
        console.error;
        toast.error("Servidor sobrecarregado, tente novamente.");
      }
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

  const handleScrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Main>
      <CardHeroes>
        <ToastContainer />
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
        <FaChevronCircleUp
          onClick={handleScrollPage}
          style={{ cursor: "pointer" }}
          size={30}
        />
      </CardHeroes>
      <ContainerPaginator>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </ContainerPaginator>
      {modalOpen && selectedHero && (
        <ModalCards
          closeModal={closeModal}
          selectedHero={selectedHero}
          toggleCardSelection={() => toggleCardSelection(selectedHero)}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
        />
      )}
    </Main>
  );
};
export default Cards;
