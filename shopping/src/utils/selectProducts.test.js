import test from 'node:test'
import assert from 'node:assert/strict'
import { selectProducts } from './selectProducts.js'
import { products } from '../data/products.js'

const view = { query: '', category: 'all', sort: 'default' }

test('한글과 영문 검색, 카테고리 및 빈 검색 결과를 처리한다', () => {
  assert.equal(selectProducts(products, { ...view, query: ' KEYBOARD ' })[0].id, 1)
  assert.equal(selectProducts(products, { ...view, query: '마우스' })[0].id, 2)
  assert.equal(selectProducts(products, { ...view, category: 'monitor' })[0].id, 3)
  assert.deepEqual(selectProducts(products, { ...view, query: '없는상품' }), [])
  assert.deepEqual(selectProducts(products, { ...view, category: 'mouse', query: 'Keyboard' }), [])
})

test('가격 정렬은 원본 상품 배열을 변경하지 않는다', () => {
  const frozen = Object.freeze([...products])
  assert.deepEqual(selectProducts(frozen, { ...view, sort: 'low' }).map(p => p.id), [2, 1, 3])
  assert.deepEqual(selectProducts(frozen, { ...view, sort: 'high' }).map(p => p.id), [3, 1, 2])
  assert.deepEqual(frozen.map(p => p.id), [1, 2, 3])
})
