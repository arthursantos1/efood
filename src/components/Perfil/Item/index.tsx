import { ContainerItens, Modal, ModalContent } from './styles'

import { Cardapio } from '../../../Pages/Home'

import fechar from '../../../assets/images/close.png'
import { useState } from 'react'

type Props = {
  cardapios: Cardapio[]
}

const ProductItem = ({ cardapios }: Props) => {
  /* Foi criado um estado que verifica qual item foi selecionado e armazenado */
  const [itemSelecionado, setItemSelecionado] = useState<Cardapio | null>(null)

  return (
    <>
      <ContainerItens>
        {cardapios.map((cardapio) => (
          <li key={cardapio.id}>
            <img src={cardapio.foto} alt={cardapio.nome} />
            <h3>{cardapio.nome}</h3>
            <p>{cardapio.descricao}</p>
            <button
              onClick={() => {
                setItemSelecionado(cardapio)
              }}
            >
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ContainerItens>
      <Modal className={itemSelecionado ? 'visivel' : ''}>
        <ModalContent>
          <header>
            <img
              src={fechar}
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
              <button>
                Adicionar ao Carrinho - R${itemSelecionado?.preco.toFixed(2)}
              </button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setItemSelecionado(null)}></div>
      </Modal>
    </>
  )
}

export default ProductItem
