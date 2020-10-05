import styled from 'styled-components';

export const Grid = styled.div`

display: grid;
grid-template-rows: 80px auto 60px;
grid-template-areas: 
'HD'
'CT'
'FT';



@media(max-width:768px) {
    grid-template-rows: 80px auto;
}
`;