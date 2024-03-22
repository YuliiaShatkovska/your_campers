import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
  background-color: #fff;
  color: #101828;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
input {
  font-family: inherit;
  border: none;
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  fill: transparent;
  
}

`;
