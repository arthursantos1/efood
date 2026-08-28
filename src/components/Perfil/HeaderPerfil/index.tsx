import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'

import Logo from '../../../assets/images/logo.png'
import { open } from '../../../store/reducers/Cart'

import * as S from './styles'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HomeLink to="/">Restaurantes</S.HomeLink>
        <a href="/">
          <img src={Logo} alt="Logo do Efood" />
        </a>
        <S.CartButton onClick={openCart}>
          {items.length} produtos(s) no carrinho
        </S.CartButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export default HeaderPerfil
