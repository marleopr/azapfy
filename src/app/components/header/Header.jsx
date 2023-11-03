"use client";
import { createContext } from "react";
import logo from "public/assets/logo.png";
import logoSlogan from "public/assets/asset-header.png";
import Image from "next/image";

const Context = createContext();
import {
  HeaderDescription,
  HeaderDivider,
  HeaderSubtitle,
  HeaderTitle,
  Logo,
  Main,
  RangeInfo,
  RangeLogo,
} from "./HeaderStyled";

const Header = () => {
  return (
    <Main>
      <RangeLogo>
        <Logo>
          <Image
            src={logo}
            alt="Logotipo da Leadster"
            width={100}
            height={100}
          />
        </Logo>
      </RangeLogo>
      <RangeInfo>
        <p className="text-leadster-400">WEBINARS EXCLUSIVOS</p>
        <HeaderTitle>Menos Conversinha,</HeaderTitle>
        <div className="relative flex flex-col text-3xl">
          <HeaderSubtitle className="text-transparent">
            Mais Conversão
          </HeaderSubtitle>
          <div className="slogan">
            <Image src={logoSlogan} alt="head asset" />
          </div>
          <HeaderDivider />
        </div>
        <HeaderDescription>
          <span>Conheça as estratégias que</span>
          <span className="header-description">mudaram o jogo </span> <br className="md:hidden" />e como
          aplicá-las no seu negócio
        </HeaderDescription>
      </RangeInfo>
    </Main>
  );
};
export default Header;
