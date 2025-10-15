import { React } from 'react'
import ProductList from './components/productList/ProductList';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
  <div className='container'>
    <h2>Mi tienda</h2>
    <Navbar />
    <ProductList />
    
  </div>  )
}

export default App
