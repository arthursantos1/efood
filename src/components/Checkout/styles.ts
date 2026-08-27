import styled from 'styled-components'
import { cores } from '../../style'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Card = styled.div`
  h4 {
    color: ${cores.douradoClaro};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    margin-top: 0;
  }

  p {
    color: ${cores.douradoClaro};
    font-size: 14px;
    line-height: 22px;
    padding: 8px 0;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.douradoClaro};
    padding: 8px 0;
  }

  input {
    width: 100%;
    height: 32px;
    border: 1px solid ${cores.branco};
    background-color: ${cores.douradoClaro};

    &.error {
      border: 3px solid red;
    }
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerButton = styled.div`
  margin-top: 24px;
`
