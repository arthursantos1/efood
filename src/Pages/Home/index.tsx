import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

export type Restaurant = {
  id: number
  titulo: string
  descricao: string
  capa: string
  avaliacao: number
  tipo: string
  destacado: boolean
}

const Home = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  return (
    <>
      <Header />
      <ProductList restaurantes={restaurant} />
    </>
  )
}

export default Home
