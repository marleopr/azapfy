"use client";
import { createContext } from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFistRaised, faShield, faBrain, faBolt, faTachometerAlt, faDumbbell, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
const Context = createContext();

const ModalCards = ({ closeModal, selectedHero }) => {

  const powerstats = selectedHero.powerstats;
  const total = Object.values(powerstats).reduce((acc, cur) => acc + parseInt(cur), 0);

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
          {/* {console.log(selectedHero.biography.aliases)} */}
        </ModalTitle>
        <PosterPath src={selectedHero.images.lg} alt={selectedHero.name} />
        <h6>{selectedHero.biography.fullName}</h6>
        <Estatisticas>
          <p>{selectedHero.description}</p>
          {/* <strong>Estatísticas:</strong> */}
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
          {/* <h6 style={{ marginTop: "2%" }} className="dividing-line"></h6> */}
          <Total>
            <p><FontAwesomeIcon icon={faArrowCircleUp} /> Total: {total} </p>
          </Total>
        </Estatisticas>
        <Button>Batalhar</Button>
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
  @media screen and (max-device-width: 480px) {
    /* font-size: 20px; */
    /* padding: 25px 40px 15px 40px; */
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
  color: #3d64b8;
  background: #fac705;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    /* width: 70vw; */
    /* height: 20px; */
    /* font-size: 12px; */
    /* margin: 5px 0 5px 38px; */
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
  color: #fac705;
  background: #3d64b8;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    /* width: 80px; */
    /* height: 20px; */
    /* font-size: 12px; */
    /* margin: 5px 0 5px 125px; */
  }
`