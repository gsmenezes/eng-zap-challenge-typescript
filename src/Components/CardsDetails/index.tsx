import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { FaBed, FaBath, FaCar, FaRegCaretSquareLeft } from "react-icons/fa";

import { IProperty } from "../../Services/IPropertyDetails";
import api from "../../Services/apiservices";
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

const CardsDetails: React.FC = () => {
  const [items, setItems] = useState<Array<IProperty>>([]);

  useEffect(() => {
    api.get("source-1.json").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <Container>
      {items.map((item) => (
        <CardDetails>
          <Content>
            <ContentInfo>
              <Card key={item.id}>
                <Title>Detalhes da Propriedade</Title>
                <Price>{formatCurrency.format(item.pricingInfos.price)}</Price>
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
                </Info>
                <Link to="/list">
                  <FaRegCaretSquareLeft size={20} />
                  <p>Voltar à Home</p>
                </Link>
              </Card>
            </ContentInfo>
          </Content>

          <ImagesProperty>
            <Carousel
              className="carousel"
              defaultActiveIndex={0}
              controls={true}
              indicators={false}
            >
              {item.images.map((images) => (
                <Carousel.Item className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={images}
                    alt="Imagens da propriedade"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </ImagesProperty>
        </CardDetails>
      ))}
    </Container>
  );
};

export default CardsDetails;
