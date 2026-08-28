import { Cardapio } from '../models/Restaurant'

export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return (accumulator += currentItem.preco)
    }
    return 0
  }, 0)
}

export const getDescricao = (descricao: string) => {
  if (descricao.length > 95) {
    return descricao.slice(0, 120) + '...'
  }
  return descricao
}
