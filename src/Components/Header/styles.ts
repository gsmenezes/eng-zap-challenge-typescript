import styled from 'styled-components';

export const Container = styled.div`
background-color: #0A5A80;
top:0;
left: 0;
padding-top: 5px;
position: fixed;
width: 100%;
height: 80px;
z-index: 1000;

`;

export const Logo = styled.div`
text-align: center;
margin-top: 8px;

>img {
    width: 356px;
    max-width: 360px;

    @media (max-width: 768px){
        width: 70%;
    }
}
`;

