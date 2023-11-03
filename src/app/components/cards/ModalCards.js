"use client";
import { createContext } from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFistRaised, faShield, faBrain, faBolt, faTachometerAlt, faDumbbell, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
const Context = createContext();

const ModalCards = ({ closeModal, selectedVideo }) => {

    const powerstats = selectedVideo.powerstats;
    const total = Object.values(powerstats).reduce((acc, cur) => acc + parseInt(cur), 0);

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
                <ModalTitle>
                    <span className="title">{selectedVideo.name}</span>
                    <span>- {selectedVideo.biography.aliases}</span>
                </ModalTitle>
                <PosterPath src={selectedVideo.images.lg} alt={selectedVideo.name} />
                <strong>Nome completo:</strong>
                <span>{selectedVideo.biography.fullName}</span>
                <h6 style={{ marginTop: "2%" }} className="dividing-line"></h6>
                <p>{selectedVideo.description}</p>
                <strong>Estatísticas:</strong>
                <p><FontAwesomeIcon icon={faFistRaised} /> Combate: {selectedVideo.powerstats.combat}</p>
                <p><FontAwesomeIcon icon={faShield} /> Durabilidade: {selectedVideo.powerstats.durability}</p>
                <p><FontAwesomeIcon icon={faBrain} /> Inteligência: {selectedVideo.powerstats.intelligence}</p>
                <p><FontAwesomeIcon icon={faBolt} /> Poder: {selectedVideo.powerstats.power}</p>
                <p><FontAwesomeIcon icon={faTachometerAlt} /> Velocidade: {selectedVideo.powerstats.speed}</p>
                <p><FontAwesomeIcon icon={faDumbbell} /> Força: {selectedVideo.powerstats.strength}</p>
                <h6 style={{ marginTop: "2%" }} className="dividing-line"></h6>
                <p><FontAwesomeIcon icon={faArrowCircleUp} /> Total: {total} </p>
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
  position: relative;
  width: 25rem;
  height: 43rem;
  border-radius: 10px;
  border-top: solid ${colors.blue};
  background-color: ${colors.white};

  iframe {
    border: solid red;
    width: 100%;
    margin-bottom: 10px;
    
  }
  .dividing-line {
    text-align: center;
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  strong {
    margin: 10px;
  }
  p {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  h6 {
    margin-left: 10px;
    margin-bottom: 5px;
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
  padding: 35px 60px 20px 60px;
  .title {
    color: ${colors.blue};
    margin-right: 5px;
  }
  @media screen and (max-device-width: 480px) {
    font-size: 20px;
    padding: 25px 40px 15px 40px;
  }
`;
const PosterPath = styled.img`
width: 100%;
height: 250px;
object-fit: cover;
`;