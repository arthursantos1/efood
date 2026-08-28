import styled from 'styled-components'

import { breakpoints, colors } from '../../../style'

export const ContainerItens = styled.ul`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  margin-top: 56px;

  li {
    background-color: ${colors.red};
    margin-bottom: 32px;
    padding: 16px 8px;
    color: ${colors.lightGold};
    max-width: 320px;
    width: 100%;

    img {
      width: 100%;
      height: 167px;
      object-fit: cover;
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
      background-color: ${colors.lightGold};
      padding: 4px;
      border: none;
      color: ${colors.red};
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
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
  padding: 16px;

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
  background-color: ${colors.red};
  color: ${colors.white};
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

  .container {
    display: flex;
    justify-content: space-betwen;
  }

  img {
    width: 280px;
    height: 280px;
    margin-left: 32px;
    margin-right: 24px;
    margin-bottom: 32px;
    objet-fit: cover;
  }

  .conteudo {
    display: block;

    h4 {
      font-size: 18px;
      font-height: bold;
    }

    p {
      margin: 16px 0;
      font-size: 14px;
      line-height: 22px;
    }

    button {
      background-color: ${colors.lightGold};
      color: ${colors.red};
      font-weight: bold;
      font-size: 14px;
      padding: 16px 8px;
      border: none;
      width: 50%;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
    flex-direction: column;
    overflow-y: auto;
    max-height: 80vh;

    img {
      max-width: 100%;
      height: 200px;
      margin-right: 0;
      margin-bottom 16px;
    }
  }
`
