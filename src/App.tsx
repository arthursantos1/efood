import Header from './components/Header'
import ProductList from './components/ProductList'
import { GlobalCss } from './style'

function App() {
  return (
    <div>
      <>
        <GlobalCss />
        <Header />
        <ProductList />
      </>
    </div>
  )
}

export default App
