import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
#root{ 
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: lightskyblue;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px 50px;
   background-color: lightskyblue;

}
h1{
  margin: 0px;
}

a {
  text-decoration: none;
  color: black
}

img {
  /* display: block;
  width: 200px;
  max-width: 100%;
  height: auto;

  border-radius: 5px; */
/* background: linear-gradient(180deg, rgba(29, 29, 29, 0.00) 15.78%, rgba(29, 29, 29, 0.78) 100%); */
}
`;
