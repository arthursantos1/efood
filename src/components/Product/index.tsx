import star from '../../assets/images/star.png'
import { ButtonLink } from '../Button/styles'

import * as S from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
  rating: number
  tipo: string
  destaque?: boolean
}

const Product = ({
  title,
  description,
  image,
  rating,
  tipo,
  destaque,
  id
}: Props) => {
  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.CardInfo>
        <S.Title>{title}</S.Title>
        <S.CardNote>
          <S.TextNote>{rating}</S.TextNote>
          <img src={star} alt="Estrela" />
        </S.CardNote>
        <S.TextDescription>{description}</S.TextDescription>
        <ButtonLink to={`/perfil/${id}`}>Saiba mais</ButtonLink>
      </S.CardInfo>
      <S.CardTag>
        <S.Tag>{tipo}</S.Tag>
        {destaque && <S.Tag>Destaque da semana</S.Tag>}
      </S.CardTag>
    </S.Card>
  )
}

export default Product
