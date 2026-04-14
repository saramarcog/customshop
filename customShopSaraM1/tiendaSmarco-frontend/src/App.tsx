import { useEffect, useState } from 'react'
import type { Product } from './types'
import { ProductCard } from './components/productCard'
import { useNavigate } from 'react-router-dom'


function App() {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(setProducts)
  }, [])

  return (

    <>
      <div className='products-grid'>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onSelect={(id) => navigate(`/product/${id}`)} 
          />
        ))}
      </div>
    </>
  
  )
}


export default App
