import styled from 'styled-components';

export const Container = styled.div` 
grid-area: CT;
background-color: #FFF;
padding: 10px;
height: calc(100vh - 140px);
overflow-y: scroll;

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