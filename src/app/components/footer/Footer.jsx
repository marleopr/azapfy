"use client";
import { createContext } from "react";
import Image from "next/image";
import logo from "public/assets/leadster_270.gif";
import linkedin from "public/assets/linkedin.png";
import facebook from "public/assets/facebook.png";
import instagram from "public/assets/instagram.png";
import {
  Main,
  RangeLogo,
  Logo,
  Menu,
  Socials,
  InfoFooter,
  FooterDivider,
} from "./FooterStyled";
const Context = createContext();

const Footer = () => {
  return (
    <Main>
      <RangeLogo>
        <Logo>
          <Image src={logo} alt="Logotipo da Leadster" />
        </Logo>
      </RangeLogo>
      <p>Transformando visitantes em clientes.</p>
      <Menu>
        <ul>
          <strong>Links Principais</strong>
          <li>Home</li>
          <li>Ferramenta</li>
          <li>Preço</li>
          <li>Contato</li>
        </ul>
        <ul>
          <strong>Cases</strong>
          <li>Geração de Leads B2B</li>
          <li>Geração de Leads em Software</li>
          <li>Geração de Leads em Imobiliária</li>
          <li>Cases de Sucesso</li>
        </ul>
        <ul>
          <strong>Materiais</strong>
          <li>Blog</li>
          <li>Parceria com Agências</li>
          <li>Guia Definitivo do Marketing</li>
          <li>Materiais Gratuitos</li>
        </ul>
        <ul>
          <strong>Siga a Leadster</strong>
          <span className="fotosocial">
            <Socials src={linkedin} alt="Linkedin" width={50} />
            <Socials src={facebook} alt="Facebook" width={50} />
            <Socials src={instagram} alt="Instagram" width={50} />
          </span>
          <li>
            <span className="address">E-mail:</span> contato@leadster.com.br
          </li>
          <li>
            <span className="address">Telefone:</span> (42) 98828-9851
          </li>
        </ul>
      </Menu>
      <FooterDivider />

      <InfoFooter>
        <span>
          Copyright © 2015 - 2022 Todos os direitos reservados |
          <span className="info-footer">Leadster</span>
        </span>
        <span>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          Termos de uso
        </span>
      </InfoFooter>
    </Main>
  );
};
export default Footer;
