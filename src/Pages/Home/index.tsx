import React from "react";

import Content from "../../Components/Content";
import Cards from "../../Components/Cards";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Cards />
        </Content>
    </Container>
  );
};

export default Home;
