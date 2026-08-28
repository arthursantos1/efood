import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { breakpoints, colors } from '../../../style'
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

  img {
    width: 124px;
    height: 57px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 16px 0;
  }
`

export const HomeLink = styled(Link)`
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: ${colors.red};
`

export const CartButton = styled.button`
  font-weight: 900;
  font-size: 18px;
  border: none;
  background-color: transparent;
  color: ${colors.red};
  cursor: pointer;
`
