import { Overlay, CartContainer, Sidebar, CartItem, Prices } from './styles'

import Button from '../Button'

import pizza from '../../assets/images/pizza.jpeg'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} alt="Pizza portuguesa" />
            <div>
              <h3>Nome do item</h3>
              <p>R$60,90</p>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="Pizza portuguesa" />
            <div>
              <h3>Nome do item</h3>
              <p>R$60,90</p>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="Pizza portuguesa" />
            <div>
              <h3>Nome do item</h3>
              <p>R$60,90</p>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Prices>
          Valor total <span>R$182,70</span>
        </Prices>
        <Button type="button" title="Continuar com a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
