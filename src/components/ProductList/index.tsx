import Product from '../Product'
import { List, Container } from './styles'

import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'

const ProductList = () => (
  <Container>
    <List>
      <li>
        <Product
          title="Hioki Sushi"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
          rating={4.9}
          infos={['Destaque da semana', 'Japonesa']}
        />
      </li>
      <li>
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={pasta}
          rating={4.8}
          infos={['Italiana']}
        />
      </li>
      <li>
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={pasta}
          rating={4.7}
          infos={['Italiana']}
        />
      </li>
      <li>
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={pasta}
          rating={4.6}
          infos={['Italiana']}
        />
      </li>
      <li>
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={pasta}
          rating={4.5}
          infos={['Italiana']}
        />
      </li>
      <li>
        <Product
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={pasta}
          rating={4.5}
          infos={['Italiana']}
        />
      </li>
    </List>
  </Container>
)

export default ProductList
