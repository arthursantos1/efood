import {
  Card,
  CardNota,
  Titulo,
  CardInfo,
  TextoNota,
  TextoDescricao,
  Botao,
  Tag,
  CardTag
} from './styles'

import star from '../../assets/images/star.png'

const Product = () => (
  <Card>
    <img src="https://dummyimage.com/472x217" alt="teste" />
    <CardInfo>
      <Titulo>Hioki Sushi</Titulo>
      <CardNota>
        <TextoNota>4.9</TextoNota>
        <img src={star} alt="Estrela" />
      </CardNota>
      <TextoDescricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </TextoDescricao>
      <Botao>Saiba mais</Botao>
    </CardInfo>
    <CardTag>
      <Tag>Destaque da semana</Tag>
      <Tag>Japonesa</Tag>
    </CardTag>
  </Card>
)

export default Product
