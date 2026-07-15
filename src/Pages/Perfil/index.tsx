import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Apresentacao from '../../components/Perfil/Apresentacao'
import HeaderPerfil from '../../components/Perfil/HeaderPerfil'
import ProductItem from '../../components/Perfil/Item'

import { Restaurant } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurant[]) => {
        const restaurant = res.find((cardapio) => cardapio.id === Number(id))
        setRestaurant(restaurant || null)
      })
  }, [id])

  return (
    <>
      <HeaderPerfil />
      {restaurant && <Apresentacao banner={restaurant} />}
      {restaurant && <ProductItem cardapios={restaurant.cardapio} />}
    </>
  )
}

export default Perfil
