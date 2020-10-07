import styled from 'styled-components';

export const Grid = styled.div`

display: grid;
grid-template-rows: 80px auto 60px;
grid-template-areas: 
'HD'
'CT'
'FT';

overflow: auto;

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


@media(max-width:768px) {
    grid-template-rows: 80px auto;
}
`;