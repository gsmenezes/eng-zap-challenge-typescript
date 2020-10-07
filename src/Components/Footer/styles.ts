import styled from 'styled-components';

export const Container = styled.div`
background-color: #0A5A80;
bottom:0;
left: 0;
display: flex;
align-items: center;
justify-content: space-evenly;
position: fixed;
height: 60px;
width: 100%;

@media(max-width:768px){
    display: inherit;
}
`;

export const Logo = styled.div`
margin-top: 10px;
`;

export const Text = styled.div`
display: flex;
color: #FFF;
align-items: center;

>p {
    padding-right: 5px;
    font-size: 13px;
    font-weight: 500;
}

>svg {
    padding-right: 5px;
}

`;

export const Contacts = styled.div`
display: flex;
`;

export const Social = styled.div`

>a {
    text-decoration: none;

    >svg {
    color: #FFF;
    padding: 0 7px;
}
}
`;
