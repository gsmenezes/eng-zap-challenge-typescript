import React, { useMemo } from "react";

import Content from "../../Components/Content";
import Cards from "../../Components/Cards";

import { Container, HomeHeader } from "../List/styles";

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const { type } = match.params;
  const title = useMemo(() => {
    return type === "portal-name" ? "Zap Imóveis" : "Viva Real";
  }, [type]);

  return (
    <Container>
      <HomeHeader title={title}></HomeHeader>
      <Content>
        <Cards />
      </Content>
    </Container>
  );
};

export default List;
