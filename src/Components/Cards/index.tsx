import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

import api from "../../Services/apiservices";
import { IProperty } from "../../Services/IPropertyDetails";

import formatCurrency from "../../Utils/formatCurrency";

import { Container } from "./styles";
import { boundingBox } from "../../Utils/boundingBox";

interface IRouteParams {
  location: {
    state: {
      type: string;
    };
  };
}

const Cards: React.FC<IRouteParams> = ({ location }) => {
  const [items, setItems] = useState<Array<IProperty>>([]);
  const [filteredItems, setFilteredItems] = useState<Array<IProperty>>([]);
  const { type } = location.state;
  const title = useMemo(() => {
    return type === "zap-imoveis" ? "Imóveis para venda - Zap Imóveis" : "Imóveis para locação - Viva Real";
  }, [type]);

  useEffect(() => {
    api.get("source-1.json").then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    let filteredProperty = items.filter(
      (item) =>
        item.address.geoLocation.location.lat !== 0 &&
        item.address.geoLocation.location.lat !== 0
    );

    filteredProperty = verifyPropertyEligibility(filteredProperty, type);

    setFilteredItems(filteredProperty);
  }, [type, items]);

  function verifyPropertyEligibility(
    properties: Array<IProperty>,
    type: string
  ) {
    let filteredProperties = Array<IProperty>();

    if (type === "zap-imoveis") {
      filteredProperties = properties
        .filter((item) => item.pricingInfos.businessType === "SALE")
        .filter((item) => item.usableAreas > 0)
        .filter((item) => {
          const { lat, lon } = item.address.geoLocation.location;
          const { price } = item.pricingInfos;
          const { usableAreas } = item;
          const propertyValue = price / usableAreas;
          let limitValue = 3500;

          if (boundingBox(lat, lon)) {
            limitValue = limitValue - (limitValue / 100) * 10;
            if (propertyValue > limitValue) {
              return item;
            }
          }

          if (propertyValue > limitValue) {
            return item;
          }
          return null;
        });
    }

    if (type === "viva-real") {
      filteredProperties = properties
        .filter((item) => item.pricingInfos.businessType === "RENTAL")
        .filter((item) => item.pricingInfos.monthlyCondoFee !== null)
        .filter((item) => {
          const { price, monthlyCondoFee } = item.pricingInfos;
          const { lat, lon } = item.address.geoLocation.location;
          let limitValue;
          if (boundingBox(lat, lon)) {
            limitValue = price - (price / 100) * 50;
            if (monthlyCondoFee < limitValue) {
              return item;
            }
          }
          limitValue = price - (price / 100) * 30;
          if (monthlyCondoFee < limitValue) {
            return item;
          }
          return null;
        });
    }

    return filteredProperties;
  }

  return (
    <>
      <Container>
        <div className="title-header">
          <h2 title={title}></h2>
        </div>
        {filteredItems.map((item) => (
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
                  {item.usableAreas} <sup>m²</sup>
                </div>
                <div className="type">A. Útil</div>
              </div>
              <div className="info border">
                <Link to={{ pathname: "/details", state: { item } }}>
                  <div className="value">
                    <FaCamera size={20} />
                  </div>
                  <div className="type">Ver mais</div>
                </Link>
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
    </>
  );
};

export default Cards;
