import styled from 'styled-components'
import { breakpoints } from '../../style'

export const Imagem = styled.img`
  width: 100%;
  height: 384px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 80%;
  }
`
