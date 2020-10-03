import React from 'react';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

import { Grid } from './styles';

const LayoutPage: React.FC = ({children}) => {
    return (
        <>
            <Grid>
                <Header />
                <Content>
                    {children}
                    </Content>
                <Footer />
                </Grid>
        </>
    );
};

export default LayoutPage;