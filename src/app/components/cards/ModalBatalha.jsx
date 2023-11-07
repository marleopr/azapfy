"use client";
import { createContext } from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faBolt,
  faBrain,
  faDumbbell,
  faFistRaised,
  faShield,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Context = createContext();

const ModalBatalha = ({ selectedHero, vencedor, closeModal }) => {
  const powerstats = vencedor.powerstats;
  const total = Object.values(powerstats).reduce(
    (acc, cur) => acc + parseInt(cur),
    0
  );

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
        {/* <h6
          style={{ marginTop: "2%", marginBottom: "10px" }}
          className="dividing-line"
        ></h6>
        <ButtonsContainer>
        </ButtonsContainer>
        {vencedor.biography.fullName}
        <PosterPath src={vencedor.images.lg} alt={vencedor.name} />
        {vencedor ? <Vencedor>Vencedor: {vencedor.name}</Vencedor> : null} */}
        <ModalTitle>
          <h3>VENCEDOR:</h3>
          <span className="title">{vencedor.name}</span>
          <span>
            -{" "}
            {vencedor.biography.aliases[0]
              ? vencedor.biography.aliases[0] === "-"
                ? "Sem informações"
                : vencedor.biography.aliases[0]
              : "Sem informações"}
          </span>
          {/* {console.log(vencedor.biography.aliases)} */}
        </ModalTitle>
        <PosterPath src={vencedor.images.lg} alt={vencedor.name} />
        <h6>{vencedor.biography.fullName}</h6>
        <Estatisticas>
          <p>{vencedor.description}</p>
          {/* <strong>Estatísticas:</strong> */}
          <AtributosInfo>
            <p>
              <FontAwesomeIcon icon={faFistRaised} /> Combate:{" "}
              {vencedor.powerstats.combat}
            </p>
          </AtributosInfo>
          <AtributosInfo>
            <p>
              <FontAwesomeIcon icon={faShield} /> Durabilidade:{" "}
              {vencedor.powerstats.durability}
            </p>
          </AtributosInfo>
          <AtributosInfo>
            <p>
              <FontAwesomeIcon icon={faBrain} /> Inteligência:{" "}
              {vencedor.powerstats.intelligence}
            </p>
          </AtributosInfo>
          <AtributosInfo>
            <p>
              <FontAwesomeIcon icon={faBolt} /> Poder:{" "}
              {vencedor.powerstats.power}
            </p>
          </AtributosInfo>
          <AtributosInfo>
            <p>
              <FontAwesomeIcon icon={faTachometerAlt} /> Velocidade:{" "}
              {vencedor.powerstats.speed}
            </p>
          </AtributosInfo>
          <AtributosInfo>
            <p>
              <FontAwesomeIcon icon={faDumbbell} /> Força:{" "}
              {vencedor.powerstats.strength}
            </p>
          </AtributosInfo>
          <Total>
            <p>
              <FontAwesomeIcon icon={faArrowCircleUp} /> Total: {total}{" "}
            </p>
          </Total>
        </Estatisticas>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalBatalha;

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
  border-top: solid ${colors.green};
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
  text-align: center;
  h3{
    color: ${colors.green};
  }
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
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Estatisticas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
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
`;
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
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* width: 80px; */
    /* height: 20px; */
    /* font-size: 12px; */
    /* margin: 5px 0 5px 125px; */
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px;
  /* border: solid 1px red; */
`;
const Vencedor = styled.div``;
