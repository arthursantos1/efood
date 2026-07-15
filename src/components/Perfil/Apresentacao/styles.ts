import styled from 'styled-components'
import { cores } from '../../../style'

export const Banner = styled.section`
  height: 280px;
  background-size: cover;
  object-fit: cover;
`

export const ContainerPerfil = styled.div`
  display: grid;
  row-gap: 156px;
  max-width: 1080px;
  margin: 0 auto;

  h4 {
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 100;
    margin-top: 24px;
  }

  p {
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 32px;
  }
`
