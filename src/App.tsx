import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './style'

import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
