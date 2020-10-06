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

const Home: React.FC = () => {
  return (
    <Container>
      <Text>Bem-vindo ao melhor portal de imóveis!</Text>
      <Subtext>Escolha o que mais combina com você:</Subtext>
      <Buttons>
        <LogoZapImoveis>
          <img src={LogoZap} alt="Logo Zap Imóveis" />
        </LogoZapImoveis>
        <LogoVivaReal>
          <img src={LogoViva} alt="Logo Viva Real" />
        </LogoVivaReal>
      </Buttons>
    </Container>
  );
};

export default Home;
