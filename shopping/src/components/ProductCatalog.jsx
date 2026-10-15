import React from 'react'
import Icon from './Icon.jsx'
import ProductCard from './ProductCard.jsx'
import { categories } from '../data/products.js'

export default function ProductCatalog({ products, totalCount, view, onCategoryChange, onSortChange, onAdd }) {
  return (
    <section className="catalog" id="products" aria-labelledby="products-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">취향을 발견하는 시간</span>
          <h2 id="products-title">당신의 책상에 어울리는 것들 <span className="tiny-star">✦</span></h2>
        </div>
        <span className="item-count">전체 <strong>{totalCount}</strong>개</span>
      </div>
      <div className="catalog-toolbar">
        <div className="category-tabs" role="group" aria-label="상품 카테고리">
          {categories.map(category => (
            <button
              key={category.id}
              type="button"
              className={view.category === category.id ? 'active' : ''}
              aria-pressed={view.category === category.id}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <select aria-label="상품 정렬" value={view.sort} onChange={event => onSortChange(event.target.value)}>
          <option value="default">기본순</option>
          <option value="low">낮은 가격순</option>
          <option value="high">높은 가격순</option>
        </select>
      </div>
      <div className="product-grid">
        {products.map(product => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
      </div>
      {products.length === 0 && (
        <div className="no-results">
          <Icon name="search" size={30} />
          <h3>찾으시는 상품이 없어요</h3>
          <p>다른 검색어나 카테고리를 선택해 보세요.</p>
        </div>
      )}
      <div className="collection-note">
        <span className="note-symbol">✳</span>
        <div>
          <strong>좋은 도구가 만드는, 기분 좋은 일상.</strong>
          <p>꼭 필요한 세 가지로 나만의 데스크를 완성해 보세요.</p>
        </div>
        <span className="note-arrow">↗</span>
      </div>
    </section>
  )
}
