"use client";
import { createContext, useState } from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFistRaised, faShield, faBrain, faBolt, faTachometerAlt, faDumbbell, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import ModalBatalha from "./ModalBatalha"

const Context = createContext();

const ModalCards = ({ closeModal, selectedHero, toggleCardSelection, selectedCards, setSelectedCards }) => {

  const powerstats = selectedHero.powerstats;
  const total = Object.values(powerstats).reduce((acc, cur) => acc + parseInt(cur), 0);

  const [modalBatalhaOpen, setModalBatalhaOpen] = useState(false);
  const [vencedor, setVencedor] = useState(null);

  const openModalBatalha = () => {
    battleCards()
  };

  const closeModalBatalha = () => {
    setModalBatalhaOpen(false);
  };

  const battleCards = () => {
    if (selectedCards.length === 2) {
      const [card1, card2] = selectedCards;
      const card1Total = Object.values(card1.powerstats).reduce((acc, cur) => acc + parseInt(cur), 0);
      const card2Total = Object.values(card2.powerstats).reduce((acc, cur) => acc + parseInt(cur), 0);
      if (card1Total > card2Total) {
        setVencedor(card1);
      } else if (card2Total > card1Total) {
        setVencedor(card2);
      } else {
        setVencedor("Empate!");
      }

      setSelectedCards([]);
      setModalBatalhaOpen(true);
    } else {
      alert("Selecione exatamente 2 cards para a batalha.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
        <ModalTitle>
          <span className="title">{selectedHero.name}</span>
          <span>
            -{" "}
            {selectedHero.biography.aliases[0]
              ? selectedHero.biography.aliases[0] === "-"
                ? "Sem informações"
                : selectedHero.biography.aliases[0]
              : "Sem informações"
            }</span>
        </ModalTitle>
        <PosterPath src={selectedHero.images.lg} alt={selectedHero.name} />
        <h6>{selectedHero.biography.fullName}</h6>
        <Estatisticas>
          <p>{selectedHero.description}</p>
          <AtributosInfo>
            <p><FontAwesomeIcon icon={faFistRaised} /> Combate: {selectedHero.powerstats.combat}</p>
          </AtributosInfo>
          <AtributosInfo>
            <p><FontAwesomeIcon icon={faShield} /> Durabilidade: {selectedHero.powerstats.durability}</p>
          </AtributosInfo>
          <AtributosInfo>
            <p><FontAwesomeIcon icon={faBrain} /> Inteligência: {selectedHero.powerstats.intelligence}</p>
          </AtributosInfo>
          <AtributosInfo>
            <p><FontAwesomeIcon icon={faBolt} /> Poder: {selectedHero.powerstats.power}</p>
          </AtributosInfo>
          <AtributosInfo>
            <p><FontAwesomeIcon icon={faTachometerAlt} /> Velocidade: {selectedHero.powerstats.speed}</p>
          </AtributosInfo>
          <AtributosInfo>
            <p><FontAwesomeIcon icon={faDumbbell} /> Força: {selectedHero.powerstats.strength}</p>
          </AtributosInfo>
          <Total>
            <p><FontAwesomeIcon icon={faArrowCircleUp} /> Total: {total} </p>
          </Total>
        </Estatisticas>
        <h6 style={{ marginTop: "2%", marginBottom: "10px" }} className="dividing-line"></h6>
        <ButtonsContainer>
          <Button variant="contained" type="contained-buttons" disabled={selectedCards.length === 2} onClick={toggleCardSelection} >Selecionar</Button>
          <Button variant="contained" type="contained-buttons" disabled={selectedCards.length !== 2} onClick={openModalBatalha} >Iniciar Batalha</Button>
        </ButtonsContainer>
        {modalBatalhaOpen && (
          <ModalBatalha closeModal={closeModalBatalha} selectedHero={selectedHero} selectedCards={selectedCards} vencedor={vencedor} />
        )}
      </ModalContent>
    </ModalOverlay>
  )
}
export default ModalCards

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  `;

const ModalContent = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 22rem;
  height: 34rem;
  border-radius: 10px;
  border-top: solid ${colors.blue};
  background-color: ${colors.white};
  .dividing-line {
    text-align: center;
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  strong {
    margin: 5px;
  }
  p {
    margin-left: 5px;
  }
  h6 {
    margin-left: 5px;
  }
`;
const ModalCloseButton = styled.button`
  position: absolute;
  outline: none;
  font-size: 20px;
  top: 1px;
  right: 10px;
  border: none;
  color: ${colors.gray};
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: ${colors.blue};
  }
`;
const ModalTitle = styled.h2`
  font-weight: 600;
  .title {
    color: ${colors.blue};
    margin-right: 5px;
  }
`;
const PosterPath = styled.img`
  align-items: center;
  width: 90%;
  height: 200px;
  margin: 5px;
  object-fit: cover;  
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  `;
const Estatisticas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const AtributosInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  border-radius: 10px;
  width: 90%;
  height: 20px;
  margin: 3px 3px 3px 3px;
  border: none;
  color: #007dff;
  background: ${colors.yellow};
  &:hover {
    color: ${colors.navy};
    cursor: pointer;
  }
  `
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  border-radius: 10px;
  width: 90%;
  height: 25px;
  margin: 3px 3px 3px 3px;
  border: none;
  color: ${colors.yellow};
  background: ${colors.blue};
  &:hover {
    background: ${colors.navy};
    cursor: pointer;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px;
`