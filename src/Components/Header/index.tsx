import React from 'react';

import logo from '../../assets/grupo-zap.svg';

import { Container, Logo} from './styles';

const Header: React.FC = () => {
    return (
        <>
            <Container>
                <Logo>
                    <img src={logo}  alt="Logo grupo Zap"/>
                </Logo>
            </Container>
        </>
    );
};

export default Header;
