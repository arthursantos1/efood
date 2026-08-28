import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../style'

export const ButtonContainer = styled.button`
  background-color: ${colors.red};
  color: ${colors.lightGold};
  border: none;
  padding: 4px 6px;
  margin: 16px 8px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.red};
  color: ${colors.lightGold};
  border: none;
  display: inline-block;
  text-decoration: none;
  padding: 4px 6px;
  margin: 16px 8px 8px;
  font-size: 14px;
  font-weight: bold;
`
