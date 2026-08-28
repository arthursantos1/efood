import Header from '../../components/Header'
import Loader from '../../components/Loader'
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

  return <Loader />
}

export default Home
