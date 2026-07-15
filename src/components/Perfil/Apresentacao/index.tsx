import { Banner, ContainerPerfil } from './styles'

import { Restaurant } from '../../../Pages/Home'

type Props = {
  banner: Restaurant
}

const Apresentacao = ({ banner }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${banner.capa})` }}>
      <ContainerPerfil>
        <h4>{banner.tipo}</h4>
        <p>{banner.titulo}</p>
      </ContainerPerfil>
    </Banner>
  )
}

export default Apresentacao
