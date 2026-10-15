import React from 'react'
import { won } from '../utils/formatPrice.js'

export default function CartSummary({ totalPrice }) {
  return (
    <div className="cart-summary">
      <div><span>상품 금액</span><span>{won(totalPrice)}원</span></div>
      <div><span>배송비</span><span className="teal-text">무료</span></div>
      <div className="cart-total">
        <strong>총금액</strong>
        <strong>{won(totalPrice)}<small>원</small></strong>
      </div>
    </div>
  )
}
