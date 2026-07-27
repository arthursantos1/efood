import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: restaurant } = useGetRestaurantQuery()

  if (restaurant) {
    return (
      <>
        <Header />
        <ProductList restaurantes={restaurant} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
