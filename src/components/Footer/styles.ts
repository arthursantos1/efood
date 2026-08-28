import styled from 'styled-components'

import { colors } from '../../style'

export const Rodape = styled.footer`
  background-color: ${colors.lightGold};
  margin-top: 120px;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 40px;
  }
`

export const SocialMedia = styled.div`
  a {
    margin-right: 8px;
  }
`

export const FooterText = styled.p`
  font-size: 10px;
  margin-top: 80px;
  margin-bottom: 40px;
  max-width: 480px;
  text-align: center;
`
