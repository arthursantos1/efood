import { ContainerItens, Modal, ModalContent } from './styles'

import { Cardapio } from '../../../Pages/Home'

import fechar from '../../../assets/images/close.png'
import pizza from '../../../assets/images/pizza.jpeg'
import { useState } from 'react'

type Props = {
  cardapios: Cardapio[]
}

const ProductItem = ({ cardapios }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <ContainerItens>
        {cardapios.map((cardapio) => (
          <li key={cardapio.id}>
            <img src={cardapio.foto} alt={cardapio.nome} />
            <h3>{cardapio.nome}</h3>
            <p>{cardapio.descricao}</p>
            <button onClick={() => setModalEstaAberto(true)}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ContainerItens>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent>
          <header>
            <img
              src={fechar}
              alt="Botão fechar modal"
              onClick={() => setModalEstaAberto(false)}
            />
          </header>
          <div>
            <img src={pizza} alt="Imagem da comida" />
            <div className="conteudo">
              <h4>Titulo da comida</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                accusantium maiores cumque voluptatibus aspernatur quod impedit
                neque fuga doloribus, commodi, repellat a ratione mollitia
                mollitia voluptates eos labore eligendi.
              </p>
              <p>Serve 2 a 3 pessoas</p>
              <button>Adicionar ao Carrinho - R$60,90</button>
            </div>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  )
}

export default ProductItem
