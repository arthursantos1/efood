import { Restaurant } from '../../models/Restaurant'
import Loader from '../Loader'
import Product from '../Product'

import { List } from './styles'

type Props = {
  restaurantes: Restaurant[]
}

const ProductList = ({ restaurantes }: Props) => {
  if (restaurantes.length === 0) {
    return <Loader />
  }

  return (
    <div className="container">
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
              id={restaurante.id}
            />
          ))}
        </li>
      </List>
    </div>
  )
}

export default ProductList
