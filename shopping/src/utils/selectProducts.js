// 원본 상품 배열을 변경하지 않고 검색, 카테고리 필터, 가격 정렬을 적용합니다.
export function selectProducts(products, view) {
  const query = view.query.trim().toLowerCase()
  const filtered = products.filter(product =>
    (view.category === 'all' || product.category === view.category) &&
    `${product.name} ${product.label}`.toLowerCase().includes(query),
  )
  return [...filtered].sort((a, b) => {
    if (view.sort === 'low') return a.price - b.price
    if (view.sort === 'high') return b.price - a.price
    return a.id - b.id
  })
}
