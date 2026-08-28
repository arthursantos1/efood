import styled from 'styled-components'

import { colors } from '../../style'

export const Card = styled.div`
  position: relative;
  max-width: 472px;
  width: 100%;
  background-color: ${colors.white};
  border: 2px solid ${colors.red};

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const CardInfo = styled.div`
  position: relative;
`

export const Title = styled.h4`
  font-size: 18px;
  font-weight: bold;
  padding: 16px 8px;
`

export const CardNote = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

  img {
    width: 21px;
    height: 21px;
  }
`

export const TextNote = styled.span`
  font-size: 18px;
  font-weight: bold;
  padding-right: 8px;
`

export const TextDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 0 8px;
`

export const CardTag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.span`
  margin-left: 8px;
  padding: 6px 4px;
  background-color: ${colors.red};
  color: ${colors.lightGold};
`
