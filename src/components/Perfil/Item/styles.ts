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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: right;

    img {
      width: 16px;
      height: 16px;
      margin: 8px;
      cursor: pointer;
    }
  }

  div {
    display: flex;
    justify-contet: space-beetwen;
  }

  img {
    width: 280px;
    height: 280px;
    margin-left: 32px;
    margin-right: 24px;
    margin-bottom: 32px;
  }

  .conteudo {
    display: block;

    p {
      margin: 16px 0;
    }

    button {
      background-color: ${cores.douradoClaro};
      color: ${cores.vermelho};
      font-weight: bold;
      padding: 16px 8px;
      border: none;
      width: 218px;
      cursor: pointer;
    }
  }
`
