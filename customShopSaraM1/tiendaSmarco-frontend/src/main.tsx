
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductDetail } from './components/productDetail.tsx'
import { ProductCard } from './components/productCard.tsx'
import type { Product } from './types.ts'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>
    )

