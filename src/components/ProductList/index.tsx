import { Restaurant } from '../../Pages/Home'
import Product from '../Product'
import { List, Container } from './styles'

type Props = {
  restaurantes: Restaurant[]
}

const ProductList = ({ restaurantes }: Props) => {
  if (restaurantes.length === 0) {
    return <h3>Carregando...</h3>
  }

  return (
    <Container>
      <List>
        <li>
          {restaurantes.map((restaurante) => (
            <Product
              key={restaurante.id}
              title={restaurante.titulo}
              description={restaurante.descricao}
              image={restaurante.capa}
              rating={restaurante.avaliacao}
              tipo={restaurante.tipo}
              destaque={restaurante.destacado}
            />
          ))}
        </li>
      </List>
    </Container>
  )
}

export default ProductList
