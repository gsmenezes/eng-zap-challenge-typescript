import styled from 'styled-components';

export const Container = styled.div` 
grid-area: CT;
background-color: #FFF;
padding: 10px;
height: calc(100vh - 140px);
overflow-y: scroll;
width:100%;

display: grid;
grid-template-columns: auto;
grid-template-areas: 'CD';
text-align: center;
justify-content: space-around;
margin: 0 auto;


::-webkit-scrollbar{
    width: 10px;
}

::-webkit-scrollbar-thumb{
    background-color: #56BAA2;
    border-radius: 10px;
}

::-webkit-scrollbar-track{
    background-color: #0A5A80;
}

`;