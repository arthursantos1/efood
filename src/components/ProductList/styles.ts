import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`

export const List = styled.ul`
  display: grid;

  li {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 80px;
  }
`
