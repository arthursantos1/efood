import styled from 'styled-components'

import { cores } from '../../../style'

export const ContainerItens = styled.ul`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  margin-top: 56px;

  li {
    background-color: ${cores.vermelho};
    margin-bottom: 32px;
    padding: 16px 8px;
    color: ${cores.douradoClaro};

    img {
      width: 304px;
      height: 167px;
    }

    h3 {
      font-size: 16px;
      font-weight: 900;
      margin: 8px 0;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0%;
      margin-bottom: 8px;
    }

    button {
      display: block;
      width: 100%;
      background-color: ${cores.douradoClaro};
      padding: 4px;
      border: none;
      color: ${cores.vermelho};
      font-weight: bold;
      font-size: 14px;
    }
  }
`
