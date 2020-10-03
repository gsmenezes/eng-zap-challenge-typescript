import React from 'react';

import logo from '../../assets/grupo-zap.svg';

import { Container, Logo, Button1, Button2 } from './styles';

const Header: React.FC = () => {
    return (
        <>
            <Container>
                <Logo>
                    <img src={logo}  alt="Logo grupo Zap"/>
                </Logo>
                <Button1> <h3>Viva Real</h3></Button1>
                <Button2> <h3>Zap</h3></Button2>
            </Container>
        </>
    );
};

export default Header;
