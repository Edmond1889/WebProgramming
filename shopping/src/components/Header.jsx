import React from 'react'
import Icon from './Icon.jsx'

export default function Header({ totalQuantity, query, onQueryChange }) {
  function handleSearch(event) {
    event.preventDefault()
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="announcement">
        일상에 살짝, 기분 좋은 변화 <span>모든 아이템 무료배송 ↗</span>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#" aria-label="Flip7 쇼핑 홈">
            <span className="brand-mark">F<span>7</span></span>
            <span>flip7<span className="brand-sub">shopping</span></span>
          </a>
          <form className="search" role="search" onSubmit={handleSearch}>
            <input
              aria-label="상품 검색"
              placeholder="어떤 아이템을 찾고 있나요?"
              value={query}
              onChange={event => onQueryChange(event.target.value)}
            />
            <button type="submit" aria-label="검색"><Icon name="search" size={24} /></button>
          </form>
          <a className="header-cart" href="#cart">
            <Icon name="bag" size={23} /><span>장바구니</span><b>{totalQuantity}</b>
          </a>
        </div>
        <nav className="main-nav" aria-label="쇼핑 메뉴">
          <div>
            <a className="nav-active" href="#products"><Icon name="grid" size={17} />쇼핑홈</a>
            <a href="#products">전체 상품</a>
            <a href="#collection">데스크 컬렉션</a>
            <a href="#cart">내 장바구니</a>
            <span className="nav-note">매일의 취향을 발견하는 곳 <span>✦</span></span>
          </div>
        </nav>
      </header>
    </>
  )
}
