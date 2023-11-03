"use client";
import { createContext, useState } from "react";
import Image from "next/image";
import grafico from "public/assets/comparativo_img_CTA.png";
import rdStation from "/public/assets/selo_RD.png";
import rating from "public/assets/rating.webp";
import card from "public/assets/no-card-dark.webp";
const Context = createContext();
import {
  GraphicBannerSection,
  ImageContainer,
  SquareOverlay,
  GraphicImage,
  ContentSection,
  Title,
  Description,
  BorderSeparator,
  ButtonAndImageContainer,
  ButtonDemo,
  CustomImage,
  RatingContainer,
  CardContainer,
} from "./BannerStyled";
import ChatComponent from "../chat/ChatComponent";

const Banner = () => {
  const [showChat, setShowChat] = useState(false);

  const openModal = () => {
    setShowChat(true);
  };
  const closeModal = () => {
    setShowChat(false);
  };

  return (
    <GraphicBannerSection>
      {showChat && (
        <ChatComponent openModal={openModal} closeModal={closeModal} />
      )}
      <ImageContainer>
        <SquareOverlay />
        <GraphicImage src={grafico} alt="grafico" />
      </ImageContainer>
      <ContentSection>
        <div>
          <Title>
            <h3>Pronto para triplicar sua</h3>
            <h3 className="font-extrabold">Geração de Leads?</h3>
          </Title>
          <Description>
            Criação e ativação em <span className="font-bold">4 minutos.</span>
          </Description>
          <BorderSeparator>
            <ButtonAndImageContainer>
              <ButtonDemo onClick={openModal}>VER DEMONSTRAÇÃO</ButtonDemo>
              <CustomImage src={rdStation} alt="Top 10 - Apps Mais Usados" />
            </ButtonAndImageContainer>
            <RatingContainer>
              <CardContainer>
                <Image src={card} alt="cartão" className="card" />
                <p>
                  <span className="font-bold">Não </span>é necessário Cartão de
                  Crédito |
                </p>
              </CardContainer>
              <CardContainer>
                <Image
                  src={rating}
                  alt="rating"
                  className="border-leadster-0 md:border-l md:pl-3"
                />
                <p>
                  <span className="font-bold">4.9</span>/5 média de satisfação
                </p>
              </CardContainer>
            </RatingContainer>
          </BorderSeparator>
        </div>
      </ContentSection>
    </GraphicBannerSection>
  );
};
export default Banner;
