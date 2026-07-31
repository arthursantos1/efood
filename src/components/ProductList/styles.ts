import styled from 'styled-components'
import { breakpoints } from '../../style'

export const List = styled.ul`
  display: grid;
  margin-top: 80px;

  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }
`
