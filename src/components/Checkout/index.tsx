import { useEffect, useState } from 'react'
import { Card, InputGroup, Row, ContainerButton } from './styles'
import Button from '../Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'
import { close, clear } from '../../store/reducers/Cart'

type Props = {
  onVoltar: () => void
}

const Checkout = ({ onVoltar }: Props) => {
  const [etapa, setEtapa] = useState<'endereco' | 'pagamento' | 'confirmacao'>(
    'endereco'
  )
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'O nome precisar ter pelo menos 5 caracteres')
        .required('Campo obrigatorio'),
      endereco: Yup.string()
        .max(50, 'O endereço precisa ter até 50 caracteres')
        .required('Campo obrigatorio'),
      cidade: Yup.string()
        .max(32, 'O máximo de caracteres é 32')
        .required('Campo obrigatorio'),
      cep: Yup.string()
        .min(8, 'O minimo de caracteres é 8')
        .max(8, 'O maximo de caracteres é 8')
        .required('O Campo é obrigatorio'),
      numero: Yup.string()
        .min(2, 'O Campo deve ter no minimo 2 caracteres')
        .required('O Campo é obrigatorio'),
      complemento: Yup.string().max(
        100,
        'O Campo deve ser preenchido com maximo de 100 caracterest'
      ),

      cardName: Yup.string().required('O campo é obrigatorio'),
      cardNumber: Yup.string().required('O campo é obrigatorio'),
      cardCode: Yup.string().required('O campo é obrigatorio'),
      expireMonth: Yup.string().required('O campo é obrigatorio'),
      expireYear: Yup.string().required('O campo é obrigatorio')
    }),
    onSubmit: async (values) => {
      purchase({
        delivery: {
          receiver: values.nome,
          addres: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            complement: values.complemento,
            number: Number(values.numero)
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      }).unwrap()
      //Foi chamado a função para que o botão valide o formulário passe para confirmação do pedido
      setEtapa('confirmacao')
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  //Função que valida os campos e passa para a proxima etapa
  const validarEtapa = async (proximaEtapa: 'pagamento' | 'confirmacao') => {
    const errors = await form.validateForm()

    const campos =
      etapa === 'endereco'
        ? ['nome', 'endereco', 'cidade', 'cep', 'numero']
        : ['cardName', 'cardNumber', 'cardCode', 'expireMonth', 'expireYear']

    const temErro = campos.some((campo) => errors[campo as keyof typeof errors])

    if (temErro) {
      const camposTouched = campos.reduce(
        (acc, campo) => ({
          ...acc,
          [campo]: true
        }),
        {}
      )

      form.setTouched({
        ...form.touched,
        ...camposTouched
      })

      return
    }

    setEtapa(proximaEtapa)
  }

  const closeCart = () => {
    dispatch(close())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <form onSubmit={form.handleSubmit}>
      {isSuccess && data && etapa === 'confirmacao' ? (
        <Card>
          <h4>Pedido realizado - {data?.orderId}</h4>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostariamos de ressaltar que nossos entregadores não estão
            autorizado a realizar cobranças extras.
          </p>
          <p>
            Lembres-se da importância de higienizar as mãos após o recebimento
            do pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <ContainerButton>
            <Button
              type="button"
              title="Concluir pedido"
              onClick={() => closeCart()}
            >
              Concluir
            </Button>
          </ContainerButton>
        </Card>
      ) : (
        <>
          {etapa === 'endereco' && (
            <Card>
              <h4>Entrega</h4>
              <InputGroup>
                <label htmlFor="nome">Quem irá receber</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={form.values.nome}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('nome') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('endereco') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cidade') ? 'error' : ''}
                />
              </InputGroup>
              <Row>
                <InputGroup maxWidth="155px">
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup maxWidth="155px">
                  <label htmlFor="numero">Número</label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('numero') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <InputGroup>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complemento') ? 'error' : ''}
                />
              </InputGroup>
              <ContainerButton>
                <Button
                  type="button"
                  title="Continuar com o Pagamento"
                  onClick={() => validarEtapa('pagamento')}
                >
                  Continuar com o Pagamento
                </Button>
                <Button
                  type="button"
                  title="Voltar para o carrinho"
                  onClick={onVoltar}
                >
                  Voltar para o carrinho
                </Button>
              </ContainerButton>
            </Card>
          )}
          {etapa === 'pagamento' && (
            <Card>
              <h4>
                Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
              </h4>
              <InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </InputGroup>
              <Row>
                <InputGroup maxWidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup maxWidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup maxWidth="155px">
                  <label htmlFor="expireMonth">Mês de vencimento</label>
                  <input
                    type="text"
                    id="expireMonth"
                    name="expireMonth"
                    value={form.values.expireMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expireMonth') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup maxWidth="155px">
                  <label htmlFor="expireYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="expireYear"
                    name="expireYear"
                    value={form.values.expireYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expireYear') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <ContainerButton>
                <Button
                  type="submit"
                  title="Finalizar pagamento"
                  onClick={form.handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading
                    ? 'Finalizando pagamento...'
                    : 'Finalizar pagamento'}
                </Button>
                <Button
                  type="button"
                  title="Voltar para edição de endereco"
                  onClick={() => setEtapa('endereco')}
                >
                  Voltar para edição de endereço
                </Button>
              </ContainerButton>
            </Card>
          )}
        </>
      )}
    </form>
  )
}

export default Checkout
