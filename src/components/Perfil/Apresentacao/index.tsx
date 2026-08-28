import { Restaurant } from '../../../models/Restaurant'

import * as S from './styles'

type Props = {
  banner: Restaurant
}

const Apresentacao = ({ banner }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${banner.capa})` }}>
      <S.ContainerPerfil>
        <h4>{banner.tipo}</h4>
        <p>{banner.titulo}</p>
      </S.ContainerPerfil>
    </S.Banner>
  )
}

export default Apresentacao
