import {
  Card,
  CardNota,
  Titulo,
  CardInfo,
  TextoNota,
  TextoDescricao,
  Botao,
  CardTag,
  Tag
} from './styles'

import star from '../../assets/images/star.png'

type Props = {
  title: string
  description: string
  image: string
  rating: number
  infos: string[]
}

const Product = ({ title, description, image, rating, infos }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <CardInfo>
      <Titulo>{title}</Titulo>
      <CardNota>
        <TextoNota>{rating}</TextoNota>
        <img src={star} alt="Estrela" />
      </CardNota>
      <TextoDescricao>{description}</TextoDescricao>
      <Botao>Saiba mais</Botao>
    </CardInfo>
    <CardTag>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </CardTag>
  </Card>
)

export default Product
