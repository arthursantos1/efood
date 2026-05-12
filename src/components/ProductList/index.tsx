import Product from '../Product'
import { List, Container } from './styles'

const ProductList = () => (
  <Container>
    <List>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
    </List>
  </Container>
)

export default ProductList
