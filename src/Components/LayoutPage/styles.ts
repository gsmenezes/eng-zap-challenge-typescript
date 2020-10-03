import styled from 'styled-components';

export const Grid = styled.div`

display: grid;
grid-template-rows: 80px auto 55px;
grid-template-areas: 
'HD'
'CT'
'FT';
height: 100vh;
overflow: hidden;
`;