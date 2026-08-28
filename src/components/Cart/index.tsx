import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/Cart'
import Checkout from '../Checkout'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

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

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            {etapa === 'carrinho' && (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>{parseToBrl(item.preco)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.Prices>
                  Valor total <span>{parseToBrl(getTotalPrice(items))}</span>
                </S.Prices>
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
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
