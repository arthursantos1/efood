import styled from 'styled-components'

import { cores } from '../../style'

export const Card = styled.div`
  position: relative;
  border: 1px solid ${cores.vermelho};
  max-width: 472px;
  width: 100%;
  background-color: ${cores.branco};
  font-family: 'Roboto', sans-serif;
`

export const CardInfo = styled.div`
  position: relative;
`

export const Titulo = styled.h4`
  font-size: 18px;
  font-weight: bold;
  padding: 16px 8px;
`

export const CardNota = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const TextoNota = styled.span`
  font-size: 18px;
  font-weight: bold;
  padding-right: 8px;
`

export const TextoDescricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 0 8px;
`

export const Botao = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.douradoClaro};
  border: none;
  padding: 4px 6px;
  margin: 16px 8px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`

export const CardTag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.span`
  margin-left: 8px;
  padding: 6px 4px;
  background-color: ${cores.vermelho};
  color: ${cores.douradoClaro};
`
