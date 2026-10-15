import React from 'react'
import Icon from './Icon.jsx'
import CartItem from './CartItem.jsx'
import CartSummary from './CartSummary.jsx'
import { won } from '../utils/formatPrice.js'

export default function CartPanel({ items, totalQuantity, totalPrice, dispatch }) {
  return (
    <aside className="cart-panel" id="cart" aria-labelledby="cart-title">
      <div className="cart-heading">
        <div>
          <Icon name="bag" size={21} />
          <h2 id="cart-title">내 장바구니</h2>
          <span className="count-badge">{totalQuantity}</span>
        </div>
        <span className="cart-kicker">MY CART</span>
      </div>
      <div aria-live="polite" className="sr-only">
        장바구니 {totalQuantity}개, 총금액 {won(totalPrice)}원
      </div>
      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon"><Icon name="bag" size={36} /><span>+</span></div>
          <h3>장바구니가 비어있습니다</h3>
          <p>마음에 드는 아이템을 담아<br />나만의 데스크를 완성해 보세요.</p>
          <a href="#products">상품 구경하기 <span>↗</span></a>
        </div>
      ) : (
        <ul className="cart-items">
          {items.map(item => <CartItem key={item.id} item={item} dispatch={dispatch} />)}
        </ul>
      )}
      <CartSummary totalPrice={totalPrice} />
      <button
        className="button clear-button"
        type="button"
        disabled={items.length === 0}
        onClick={() => dispatch({ type: 'CLEAR_CART' })}
      >
        Clear Cart <span>장바구니 비우기</span>
      </button>
      <p className="cart-bottom-note">취향을 담는 즐거움, Flip7 Shopping</p>
    </aside>
  )
}
