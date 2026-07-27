import { Banner, ContainerPerfil } from './styles'

import { Restaurant } from '../../../models/Restaurant'

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
