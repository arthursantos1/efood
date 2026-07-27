export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  descricao: string
  capa: string
  avaliacao: number
  tipo: string
  destacado: boolean
  cardapio: Cardapio[]
}
