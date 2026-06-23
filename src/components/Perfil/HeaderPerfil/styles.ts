import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../../style'

import FundoHeader from '../../../assets/images/fundoHeader.jpeg'

export const HeaderContainer = styled.header`
  background-image: url(${FundoHeader});
  display: flex;
  justify-content: center;
  height: 186px;
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 900;
    font-size: 18px;
  }

  img {
    width: 124px;
    height: 57px;
  }
`

export const HomeLink = styled(Link)`
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: ${cores.vermelho};
`
