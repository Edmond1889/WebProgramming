import test from 'node:test'
import assert from 'node:assert/strict'
import cartReducer from './cartReducer.js'
import { products } from '../data/products.js'

// 동결한 상태를 넘겨 실수로 원본 객체나 배열을 수정하면 테스트가 실패하게 합니다.
function apply(state, action) {
  state.items.forEach(Object.freeze)
  Object.freeze(state.items)
  Object.freeze(state)
  const next = cartReducer(state, action)
  assert.notEqual(next, state)
  assert.notEqual(next.items, state.items)
  return next
}

test('상품 추가와 수량 변경은 원본을 유지하며 최소 수량 1을 지킨다', () => {
  const initial = { items: [] }
  const first = apply(initial, { type: 'ADD_ITEM', payload: products[0] })
  assert.equal(first.items[0].quantity, 1)
  let state = apply(first, { type: 'ADD_ITEM', payload: products[0] })
  assert.equal(state.items.length, 1)
  assert.equal(state.items[0].quantity, 2)
  state = apply(state, { type: 'INCREASE_QUANTITY', payload: 1 })
  assert.equal(state.items[0].quantity, 3)
  for (let i = 0; i < 4; i++) {
    state = apply(state, { type: 'DECREASE_QUANTITY', payload: 1 })
  }
  assert.equal(state.items[0].quantity, 1)
  assert.equal(first.items[0].quantity, 1)
  assert.deepEqual(initial.items, [])
})

test('상품 삭제와 전체 비우기는 다른 상품과 이전 상태를 훼손하지 않는다', () => {
  let state = { items: [] }
  for (const product of products) state = apply(state, { type: 'ADD_ITEM', payload: product })
  assert.equal(state.items.reduce((sum, item) => sum + item.price * item.quantity, 0), 380000)
  const removed = apply(state, { type: 'REMOVE_ITEM', payload: 2 })
  assert.deepEqual(removed.items.map(item => item.id), [1, 3])
  assert.equal(state.items.length, 3)
  assert.deepEqual(apply(removed, { type: 'CLEAR_CART' }).items, [])
  assert.equal(cartReducer(state, { type: 'UNKNOWN' }), state)
})
