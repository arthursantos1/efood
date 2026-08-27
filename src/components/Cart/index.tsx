import { Overlay, CartContainer, Sidebar, CartItem, Prices } from './styles'

import Button from '../Button'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/Cart'
import { useState } from 'react'
import Checkout from '../Checkout'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [etapa, setEtapa] = useState<'carrinho' | 'checkout'>('carrinho')

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {etapa === 'carrinho' && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              Valor total <span>{formataPreco(getTotalPrice())}</span>
            </Prices>
            <Button
              type="button"
              title="Continuar com a entrega"
              onClick={() => setEtapa('checkout')}
            >
              Continuar com a entrega
            </Button>
          </>
        )}
        {etapa === 'checkout' && (
          <Checkout onVoltar={() => setEtapa('carrinho')} />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
