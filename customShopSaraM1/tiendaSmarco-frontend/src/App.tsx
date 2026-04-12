import { useEffect, useState } from 'react'
import type { Product } from './types'
import { ProductCard } from './components/productCard'
import { Header } from './components/header'


function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(setProducts)
  }, [])

  return (
    <>
    
      <div className='products-grid'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}


export default App
