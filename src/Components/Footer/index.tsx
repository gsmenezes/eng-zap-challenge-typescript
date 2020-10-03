import React from "react";

import { FaCopyright } from 'react-icons/fa';

import { Container, Logo, Text, Socials } from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <Logo></Logo>
        <Text>
          <p></p>
          <FaCopyright size={20} />
          <p></p>
        </Text>
        <Socials></Socials>
      </Container>
    </>
  );
};

export default Footer;
