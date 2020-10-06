import React from "react";

import LogoZap from "../../assets/zap.png";
import LogoViva from "../../assets/vivareal.png";

import {
  Container,
  Text,
  Subtext,
  Buttons,
  LogoZapImoveis,
  LogoVivaReal,
} from "../Home/styles";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Container>
      <Text>Bem-vindo ao melhor portal de imóveis!</Text>
      <Subtext>Escolha o que mais combina com você:</Subtext>
      <Buttons>
        <Link to={{ pathname: "/cards" , state:{type:'zap-imoveis'}}}>
          <LogoZapImoveis>
            <img src={LogoZap} alt="Logo Zap Imóveis" />
          </LogoZapImoveis>
        </Link>
        <Link to={{ pathname: "/cards", state:{type:'viva-real'} }}>
          <LogoVivaReal>
            <img src={LogoViva} alt="Logo Viva Real" />
          </LogoVivaReal>
        </Link>
      </Buttons>
    </Container>
  );
};

export default Home;
