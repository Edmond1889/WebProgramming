export const initialState = {
  items: [],
}

export default function cartReducer(state, action) {
  switch (action.type) {
    // ADD_ITEM: 새 상품을 수량 1로 담고, 이미 있으면 수량을 1 늘립니다.
    case 'ADD_ITEM': {
      const product = action.payload
      // id로 같은 상품이 이미 장바구니에 있는지 확인합니다.
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        // map과 객체 복사로 기존 state를 수정하지 않고 수량을 1 늘립니다.
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }

      // 처음 담는 상품은 quantity가 1인 새 객체로 만들어 새 배열에 추가합니다.
      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1 }],
      }
    }
    // INCREASE_QUANTITY: payload로 받은 id의 상품 수량을 1 늘립니다.
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }

    // DECREASE_QUANTITY: 수량을 1 줄이되, Math.max로 최소 1을 유지합니다.
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item,
        ),
      }

    // REMOVE_ITEM: filter로 해당 id를 제외한 새 배열을 만들어 삭제합니다.
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    // CLEAR_CART: items를 새 빈 배열로 교체해 장바구니를 모두 비웁니다.
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      }

    default:
      return state
  }
}

