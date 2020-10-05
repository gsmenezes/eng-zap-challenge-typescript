import styled from 'styled-components';

export const Container = styled.div`
grid-area: CD;
display: inline-grid;
align-items: center;
justify-content: space-around;
width: 100vw;
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



@media(max-width: 900px) {
    display: inline-grid;
}

.card{
    margin: 35px 2.5% 0px;
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 210px 85px 80px;
    grid-template-areas: "image" "text" "stats";

    border-radius: 18px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    text-align: center;

    transition: 0.5s ease;
    cursor: pointer;

    @media(max-width: 900px) {
    margin: 10px auto;

}
}

.card-image{
grid-area: image;
background-size: cover;

>img {
    width: 300px;
    height: 200px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}
}

.card-text{
    grid-area: text;
    margin: 12px;
}

.card-text .date{
    color: #2980B9 ;
    font-size: 14px;
}

.card-text >p{
    color: gray;
    font-size: 15px;
    font-weight: 400;
}

.card-text >h2{
    margin-top: 0px;
    font-size: 24px;
}

.card-stats{
    grid-area: stats;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: #2980B9 ;
}



.card-stats .info{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    color: #FFF;
}

.card-stats .border{
    border-left: 1px solid #0A5A80;
    border-right: 1px solid #0A5A80;
}

.card-stats .type {
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
}

.card-stats .value {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}

.card-stats .value .sup{
    font-size: 14px;
}

.card:hover{
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}
`;