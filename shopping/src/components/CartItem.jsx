import React from 'react'
import ProductArt from './ProductArt.jsx'
import { won } from '../utils/formatPrice.js'

export default function CartItem({ item, dispatch }) {
  return (
    <li className="cart-item">
      <div className={`cart-thumb ${item.color}`}><ProductArt type={item.category} /></div>
      <div className="cart-item-info">
        <div className="cart-item-title">
          <h3>{item.name}</h3>
          <button
            type="button"
            className="remove-button"
            aria-label={`${item.name} 삭제`}
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
          >
            Remove
          </button>
        </div>
        <p className="unit-price">{won(item.price)}원</p>
        <div className="cart-item-bottom">
          <div className="quantity-controls">
            <button
              type="button"
              className="minus"
              aria-label={`${item.name} 수량 감소`}
              disabled={item.quantity === 1}
              onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}
            >
              −
            </button>
            <span aria-label={`수량 ${item.quantity}`}>{item.quantity}</span>
            <button
              type="button"
              className="plus"
              aria-label={`${item.name} 수량 증가`}
              onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}
            >
              +
            </button>
          </div>
          <strong>{won(item.price * item.quantity)}<small>원</small></strong>
        </div>
      </div>
    </li>
  )
}
