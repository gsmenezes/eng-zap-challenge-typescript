import React, { useEffect, useState } from "react";

import api from "../../Services/apiservices";

import { IProperty } from "../../Services/IPropertyDetails";
import formatCurrency from "../../Utils/formatCurrency";

import { Container } from "./styles";

interface IPropertyProps {
  items: IProperty[];
}

const Cards = () => {
  const [items, setItems] = useState<Array<IProperty>>([]);

  useEffect(() => {
    api.get("source-1.json").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <Container>
      {items.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.images[0]} alt="Imagens da propriedade" />
          </div>
          <div className="card-text">
            <h2>{item.address.city ? item.address.city : ""}</h2>
            <p>{formatCurrency.format(item.pricingInfos.price)}</p>
          </div>
          <div className="card-stats">
            <div className="info">
              <div className="value">
                {" "}
                {item.usableAreas} <sup>m²</sup>
              </div>
              <div className="type">A. Útil</div>
            </div>
            <div className="info border">
              <div className="value"></div>
              <div className="type"></div>
            </div>
            <div className="info">
              <div className="value">{item.parkingSpaces}</div>
              <div className="type">
                {item.parkingSpaces === 1 ? "Vaga" : "Vagas"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Cards;
