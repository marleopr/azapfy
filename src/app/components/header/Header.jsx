"use client";
import { createContext } from "react";
import logo from "public/assets/Header.png";
import logoSlogan from "public/assets/Header.png";
import Image from "next/image";

const Context = createContext();
import { Logo, Main, RangeLogo } from "./HeaderStyled";

const Header = () => {
  return (
    <Main>
      <RangeLogo>
        <Logo>
          <Image src={logo} alt="Logotipo da Leadster" width={350} />
        </Logo>
      </RangeLogo>
    </Main>
  );
};
export default Header;
