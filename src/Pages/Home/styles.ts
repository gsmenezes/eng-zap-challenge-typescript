import styled from 'styled-components';

export const Container = styled.div`
    display: inline;
    align-content: center;
    text-align: center;
    margin: 0px auto;
    
    `;

export const Text = styled.h2`
font-size: 35px;
margin-top: 25px;
color: darkblue;

@media(max-width:768px){
    font-size: 25px;
    margin: 25px auto;
}

`;

export const Subtext = styled.h5`
    font-size: 22px;
    margin-top: 20px;
    color: darkblue;

    @media(max-width:768px){
    font-size: 20px;
    margin: 20px;
}
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 45px auto;`;

export const LogoZapImoveis = styled.button`
    background: transparent;
    border: 2px solid #0A5A80;
    border-radius: 15px;
    box-shadow: 5px 5px 9px rgba(0,0,0,0.9);
    width: 80%;
    margin: 0 25px;
>img {
    width: 80%;
}
>a {
    text-decoration: none;
}

&:hover {  
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}

@media(max-width:768px){
    width: 70%;
}
`;

export const LogoVivaReal = styled.button`
    background: transparent;
    border: 2px solid #0A5A80;
    border-radius: 15px;
    box-shadow: 5px 5px 9px rgba(0,0,0,0.9);
    width: 80%;
    margin: 0 25px;

>img {
    width: 80%;
}

&:hover {  
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}

@media(max-width:768px){
    width: 70%;
}
`; 