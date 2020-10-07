import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root {
height: 100vh;
overflow: hidden;

@media(max-width: 800px){
    overflow: auto;
}
}

*, button, input, span {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
}

button {
    cursor: pointer;
}

ol,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}
`;