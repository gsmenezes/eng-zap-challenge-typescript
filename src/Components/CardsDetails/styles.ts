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
    grid-template-columns: 600px 300px;
    grid-template-rows: 600px 300px;
    grid-template-areas:
       'carousel info'
       'carousel info';
        border-radius: 18px;
    margin: 10px auto;

    @media(max-width: 768px){
        display: block;
        margin-bottom: 100px;
        overflow: auto;
    }
`;

export const Content = styled.div`
grid-area: info;
text-align: center;

`;

export const ContentInfo = styled.div`
`;

export const Card = styled.div`


>svg {
    color: #0A5A80;
    padding-bottom: 5px;
}


>a{
text-decoration: none;
color: #0A5A80;
font-weight:400;
font-size: 16px;
text-transform: uppercase;
display: inline-block;
text-align: center;
margin: 5px auto;

@media(max-width:768px){
    margin: 5px auto 10px;
}
}
`;

export const Title = styled.h1`
    color: #0A5A80;
    font-size: 26px;
 
 @media(max-width: 768px){
    padding-top: 68px;
 }
`;

export const Info = styled.div`
display: inline;
    align-self: center;
    margin: 0 10px;


  >span {
    padding: 10px 45px;
    align-items: center;
    display: flex;
    font-weight: 500;

   >svg {
      fill: #0A5A80;
      margin-right: 8px;
    }
  }
`;

export const ImagesProperty = styled.div`
.carousel {
    position: relative;
    padding-top: 75%;
    filter: drop-shadow(0 0 10px #0003);
    perspective: 100px;
}
.carousel__viewport {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow: hidden;
    counter-reset: item;
   
}


.carousel__slide {
    flex: 0 0 100%;
    --selected-item: 0;
    transition: left 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550);

> img {
    grid-area: carousel;
    width: 100%;
    height: auto;
}

}

`;

export const Price = styled.div`
 font-size: 18px;
  font-weight: 500;
  color: #0A5A80;
  margin: 0 auto 30px;
  text-align: justify;
  padding: 20px 45px;
  line-height: 28px;
 
`;
