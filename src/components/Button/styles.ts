import styled from 'styled-components'
import { cores } from '../../style'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.douradoClaro};
  border: none;
  padding: 4px 6px;
  margin: 16px 8px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.douradoClaro};
  border: none;
  display: inline-block;
  text-decoration: none;
  padding: 4px 6px;
  margin: 16px 8px 8px;
  font-size: 14px;
  font-weight: bold;
`
