import styled from 'styled-components';

export const Container = styled.div` 
grid-area: CT;
background-color: #FFF;
padding: 10px;
height: calc(100vh - 80px);
overflow-y: scroll;

::-webkit-scrollbar{
    width: 10px;
}

::-webkit-scrollbar-thumb{
    background-color: #0A5A80;
    border-radius: 10px;
}

::-webkit-scrollbar-track{
    background-color: #C8D419;
}

`;