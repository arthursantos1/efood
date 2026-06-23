import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#e66767',
  branco: '#fff',
  douradoClaro: '#ffebd9',
  brancoClaro: '#fff8f2'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

  body{
    background-color: ${cores.brancoClaro};
    color: ${cores.vermelho};
}

  .container {
    max-width: 1366px;
    margin: 0 auto;
  }
`
