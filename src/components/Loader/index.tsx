import { SyncLoader } from 'react-spinners'

import { colors } from '../../style'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <SyncLoader color={colors.red} />
  </Container>
)

export default Loader
