import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Cardapio } from '../../../models/Restaurant'
import closeIcon from '../../../assets/images/close.png'
import { add, open } from '../../../store/reducers/Cart'
import { getDescricao } from '../../../utils'

import * as S from './styles'

type Props = {
  cardapios: Cardapio[]
}

const ProductItem = ({ cardapios }: Props) => {
  /* Foi criado um estado que verifica qual item foi selecionado e armazenado */
  const [itemSelecionado, setItemSelecionado] = useState<Cardapio | null>(null)

  const dispatch = useDispatch()

  const addToCart = (cardapio: Cardapio) => {
    dispatch(add(cardapio))
    dispatch(open())
    setItemSelecionado(null)
  }

  return (
    <>
      <S.ContainerItens>
        {cardapios.map((cardapio) => (
          <li key={cardapio.id}>
            <img src={cardapio.foto} alt={cardapio.nome} />
            <h3>{cardapio.nome}</h3>
            <p>{getDescricao(cardapio.descricao)}</p>
            <button
              onClick={() => {
                setItemSelecionado(cardapio)
              }}
            >
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </S.ContainerItens>
      <S.Modal className={itemSelecionado ? 'visivel' : ''}>
        <S.ModalContent>
          <header>
            <img
              src={closeIcon}
              alt="Botão fechar modal"
              onClick={() => {
                setItemSelecionado(null)
              }}
            />
          </header>
          <div className="container">
            <img src={itemSelecionado?.foto} alt="Imagem da comida" />
            <div className="conteudo">
              <h4>{itemSelecionado?.nome}</h4>
              <p>{itemSelecionado?.descricao}</p>
              <p>Serve: {itemSelecionado?.porcao}</p>
              <button
                onClick={() => itemSelecionado && addToCart(itemSelecionado)}
              >
                Adicionar ao Carrinho - R${itemSelecionado?.preco.toFixed(2)}
              </button>
            </div>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setItemSelecionado(null)}></div>
      </S.Modal>
    </>
  )
}

export default ProductItem
