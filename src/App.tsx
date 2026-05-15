import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './style'

import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './components/ProductList'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductList />
        <Footer />
      </>
    )
  }
])

function App() {
  return (
    <>
      <Header />
      <GlobalCss />
      <RouterProvider router={router} />
    </>
  )
}

export default App
