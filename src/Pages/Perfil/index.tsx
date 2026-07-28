import { useParams } from 'react-router-dom'

import Apresentacao from '../../components/Perfil/Apresentacao'
import HeaderPerfil from '../../components/Perfil/HeaderPerfil'
import ProductItem from '../../components/Perfil/Item'

import { useGetCardapioQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetCardapioQuery(id!)

  if (restaurante) {
    return (
      <>
        <HeaderPerfil />
        <Apresentacao banner={restaurante} />
        <ProductItem cardapios={restaurante?.cardapio} />
        <Cart />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Perfil
