import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faHouse } from '@fortawesome/free-regular-svg-icons'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<View/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
