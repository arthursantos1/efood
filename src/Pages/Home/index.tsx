import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  descricao: string
  capa: string
  avaliacao: number
  tipo: string
  destacado: boolean
  cardapio: Cardapio[]
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
