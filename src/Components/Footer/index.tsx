import React from "react";

import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/grupo-zap.svg";

import { Container, Logo, Text, Social, Contacts } from "./styles";

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="Logo grupo Zap" />
        </Logo>
        <Text>
          <p>Copyright</p>
          <FaCopyright size={20} />
          <p>2020 Grupo ZAP. Todos os direitos reservados.</p>
        </Text>
        <Contacts>
          <Social>
            <a href="https://www.facebook.com/oficialgrupozap/?rf=181832962645328">
              <FaFacebook size={40} />
            </a>
          </Social>
          <Social>
            <a href="https://www.instagram.com/oficialgrupozap/?hl=pt">
              <FaInstagram size={40} />
            </a>
          </Social>
          <Social>
            <a href="https://www.linkedin.com/company/grupo-zap/?originalSubdomain=br">
              <FaLinkedin size={40} />
            </a>
          </Social>
          <Social>
            <a href="https://www.youtube.com/channel/UCsFFhrGGWYHov5DvMwGO1lw">
              <FaYoutube size={40} />
            </a>
          </Social>
        </Contacts>
      </Container>
    </>
  );
};

export default Footer;
