import { HeaderContainer, HeaderContent, HomeLink } from './styles'

import Logo from '../../../assets/images/logo.png'

const HeaderPerfil = () => (
  <HeaderContainer>
    <HeaderContent>
      <HomeLink to="/">Restaurantes</HomeLink>
      <img src={Logo} alt="Logo do Efood" />
      <p>0 produtos(s) no carrinho</p>
    </HeaderContent>
  </HeaderContainer>
)

export default HeaderPerfil
