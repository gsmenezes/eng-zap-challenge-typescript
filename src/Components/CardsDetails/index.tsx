import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBed, FaBath, FaCar, FaRegCaretSquareLeft } from "react-icons/fa";

import { IProperty } from "../../Services/IPropertyDetails";
import formatCurrency from "../../Utils/formatCurrency";
import {
  Container,
  Title,
  Card,
  Content,
  Info,
  Price,
  ImagesProperty,
  ContentInfo,
  CardDetails,
} from "./styles";

interface IDetails {
  location: {
    state: {
      item: IProperty;
    };
  };
}

const CardsDetails: React.FC<IDetails> = ({ location }) => {
  const [item] = useState(location.state.item);

  return (
    <Container>
      <CardDetails>
        <Content>
          <ContentInfo>
            <Card>
              <Title>
                {item.pricingInfos.businessType === "SALE"
                  ? "Imóvel para Venda"
                  : "Imóvel para locação"}
              </Title>
              <Info>
                {item.bedrooms >= 1 && (
                  <span>
                    <FaBed />
                    {item.bedrooms}
                    {item.bedrooms > 1 ? " dormitórios" : " dormitório"}
                  </span>
                )}
                {item.bathrooms >= 1 && (
                  <span>
                    <FaBath />
                    {item.bathrooms}
                    {item.bathrooms > 1 ? " banheiros" : " banheiro"}
                  </span>
                )}
                {item.parkingSpaces >= 1 && (
                  <span>
                    <FaCar />
                    {item.parkingSpaces}
                    {item.parkingSpaces > 1 ? " vagas" : " vaga"}
                  </span>
                )}
                <Price>
                  <p className="value">
                    {item.pricingInfos.businessType === "SALE"
                      ? "Valor "
                      : "Aluguel: "}
                    {formatCurrency.format(item.pricingInfos.price)}
                  </p>
                  <br />
                  <p className="cond">
                    {item.pricingInfos.businessType === "RENTAL"
                      ? "Condomínio: "
                      : "Condomínio: "}
                    {formatCurrency.format(item.pricingInfos.monthlyCondoFee)}
                  </p>
                </Price>
              </Info>
              <Link to="/">
                <FaRegCaretSquareLeft size={25} />
                <p>Voltar à home</p>
              </Link>
            </Card>
          </ContentInfo>
        </Content>
        <ImagesProperty>
          <div className="carousel">
            <ol className="carousel__viewport">
              <li id="image" className="carousel__slide">
                <img src={item.images[0]} alt="Imagem da propriedade" />
              </li>
            </ol>
          </div>
        </ImagesProperty>
      </CardDetails>
    </Container>
  );
};

export default CardsDetails;
