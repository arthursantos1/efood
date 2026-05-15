import { Link } from 'react-router-dom'

import { Rodape, FooterText, FooterContainer, SocialMedia } from './styles'

import LogoEfood from '../../assets/images/logo.png'
import InstagramIcon from '../../assets/images/instagram.png'
import FacebookIcon from '../../assets/images/facebook.png'
import TwitterIcon from '../../assets/images/twitter.png'

const Footer = () => (
  <Rodape>
    <FooterContainer>
      <img src={LogoEfood} alt="Logo efood" />
      <SocialMedia>
        <Link to="https://www.instagram.com">
          <img src={InstagramIcon} alt="Instagram" />
        </Link>
        <Link to="https://www.facebook.com">
          <img src={FacebookIcon} alt="Facebook" />
        </Link>
        <Link to="https://www.twitter.com">
          <img src={TwitterIcon} alt="Twitter" />
        </Link>
      </SocialMedia>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </FooterContainer>
  </Rodape>
)

export default Footer
