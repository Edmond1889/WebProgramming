import React from 'react'
import Icon from './Icon.jsx'
import ProductArt from './ProductArt.jsx'
import { won } from '../utils/formatPrice.js'

export default function ProductCard({ product, onAdd }) {
  return (
    <article className={`product-card ${product.color}`}>
      <div className="product-image">
        <span className="product-tag">{product.label}</span>
        <ProductArt type={product.category} />
      </div>
      <div className="product-details">
        <h3>{product.name}<span>{product.label}</span></h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{won(product.price)}<span>원</span></p>
        <span className="delivery-note">배송비 무료</span>
        <button className="button button-add" type="button" onClick={() => onAdd(product)}>
          <Icon name="cart" size={17} /> Add to Cart <span>+</span>
        </button>
      </div>
    </article>
  )
}
