import styled from 'styled-components'

import { cores } from '../../../style'

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 1024px;
  width: 100%;
  height: 100;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: ${cores.vermelho};
`
