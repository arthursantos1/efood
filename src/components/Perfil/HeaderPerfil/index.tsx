import { HeaderContainer, HeaderContent, HomeLink, CartButton } from './styles'

import Logo from '../../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/Cart'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <HomeLink to="/">Restaurantes</HomeLink>
        <img src={Logo} alt="Logo do Efood" />
        <CartButton onClick={openCart}>
          {items.length} produtos(s) no carrinho
        </CartButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default HeaderPerfil
