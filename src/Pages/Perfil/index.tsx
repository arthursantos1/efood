import { useParams } from 'react-router-dom'

import Apresentacao from '../../components/Perfil/Apresentacao'
import HeaderPerfil from '../../components/Perfil/HeaderPerfil'
import ProductItem from '../../components/Perfil/Item'
import { useGetCardapioQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetCardapioQuery(id ?? '', {
    skip: !id
  })

  if (!id) {
    return <h4>Restaurante não encontrado.</h4>
  }

  if (!restaurante) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <HeaderPerfil />
      <Apresentacao banner={restaurante} />
      <ProductItem cardapios={restaurante.cardapio} />
      <Cart />
    </>
  )
}

export default Perfil
