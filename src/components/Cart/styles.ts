import styled from 'styled-components'
import { cores } from '../../style'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 8px;
  overflow-y: auto;
  scrollbar-width: thin;

  ${ButtonContainer} {
    background-color: ${cores.douradoClaro};
    color: ${cores.vermelho};
    max-width: 100%;
    width: 100%;
  }
`
export const CartItem = styled.li`
  background-color: ${cores.douradoClaro};
  display: flex;
  padding: 16px 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    background-color: transparent;
    background-size: contain;
    height: 16px;
    width: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    curso: pointer;
  }
`

export const Prices = styled.div`
  color: ${cores.douradoClaro};
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`
