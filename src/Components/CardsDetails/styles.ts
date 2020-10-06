import styled from 'styled-components';

export const Container = styled.div`
margin: 30px auto;
display: inline-grid;
align-content: space-between;
align-items: center;
text-align: center;
height: 100vh;
width: 100%;


 
`;

export const CardDetails = styled.div`
display: grid;
    grid-template-columns: 400px 300px;
    grid-template-rows: 400px 300px;
    grid-template-areas:
       'carousel info'
       'carousel info';
        border-radius: 18px;
    margin: 10px auto;
`

export const Content = styled.div`
grid-area: info;
text-align: center;


`;

export const ContentInfo = styled.div`
`;

export const Card = styled.div`


>svg {
    color: #0A5A80;
}

>p{
color: #0A5A80;
font-weight:400;
font-size: 16px;
text-transform: uppercase;
}

>a{
text-decoration: none;
}
`;

export const Title = styled.h1`
    color: #0A5A80;
    font-size: 26px;
 
`

export const Info = styled.div`
display: inline;
    align-self: center;
    margin: 0 10px;


  >span {
    padding: 10px;
    align-items: center;
    display: flex;

   >svg {
      fill: #0A5A80;
      margin-right: 8px;
    }
  }
`;

export const ImagesProperty = styled.div`

.carousel{
grid-area: carousel;
}


.carousel-item >img {
width: 400px;
height: 400px;
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
}
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #0A5A80;
 
`;
