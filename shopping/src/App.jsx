import React, { useReducer } from 'react'
import Header from './components/Header.jsx'
import HeroBanner from './components/HeroBanner.jsx'
import ProductCatalog from './components/ProductCatalog.jsx'
import CartPanel from './components/CartPanel.jsx'
import Footer from './components/Footer.jsx'
import cartReducer, { initialState } from './reducers/cartReducer.js'
import viewReducer, { initialViewState } from './reducers/viewReducer.js'
import { products } from './data/products.js'
import { selectProducts } from './utils/selectProducts.js'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [view, viewDispatch] = useReducer(viewReducer, initialViewState)

  // 합계는 현재 장바구니에서 계산하므로 별도 상태로 관리하지 않습니다.
  const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  const totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0)
  const visibleProducts = selectProducts(products, view)

  return (
    <>
      <a className="skip-link" href="#products">상품 목록으로 바로가기</a>
      <Header
        totalQuantity={totalQuantity}
        query={view.query}
        onQueryChange={query => viewDispatch({ type: 'SET_QUERY', payload: query })}
      />
      <main className="page-shell">
        <HeroBanner />
        <div className="content-layout">
          <ProductCatalog
            products={visibleProducts}
            totalCount={products.length}
            view={view}
            onCategoryChange={category => viewDispatch({ type: 'SET_CATEGORY', payload: category })}
            onSortChange={sort => viewDispatch({ type: 'SET_SORT', payload: sort })}
            onAdd={product => dispatch({ type: 'ADD_ITEM', payload: product })}
          />
          <CartPanel
            items={state.items}
            totalQuantity={totalQuantity}
            totalPrice={totalPrice}
            dispatch={dispatch}
          />
        </div>
        <Footer />
      </main>
    </>
  )
}
