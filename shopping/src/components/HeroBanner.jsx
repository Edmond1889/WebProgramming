import React from 'react'
import Icon from './Icon.jsx'
import ProductArt from './ProductArt.jsx'

export default function HeroBanner() {
  return (
    <section className="hero" id="collection" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="eyebrow"><span /> 작은 취향이 모이는 곳</span>
        <h1 id="hero-title">좋아하는 것들로,<br />채우는 나의 공간<span className="coral-dot">.</span></h1>
        <p>손이 자주 가는 물건에 마음을 담아.<br />매일의 책상을 조금 더 다정하게 만들어 보세요.</p>
        <a className="button button-gold" href="#products">
          나의 데스크 꾸미기 <Icon name="arrow" size={18} />
        </a>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="soft-shape shape-mint" />
        <div className="soft-shape shape-peach" />
        <div className="desk-tile tile-monitor"><ProductArt type="monitor" /></div>
        <div className="desk-tile tile-keyboard">
          <ProductArt type="keyboard" />
        </div>
        <div className="desk-tile tile-mouse"><ProductArt type="mouse" /></div>
        <span className="floating-caption"><span>✦</span> 나만의 작은 행복</span>
        <span className="soft-spark">✳</span>
      </div>
    </section>
  )
}
