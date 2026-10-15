export const initialViewState = { query: '', category: 'all', sort: 'default' }

// 검색과 정렬 등 화면 상태도 dispatch로 변경합니다. 장바구니 규칙은 cartReducer에 유지합니다.
export default function viewReducer(state, action) {
  switch (action.type) {
    case 'SET_QUERY': return { ...state, query: action.payload }
    case 'SET_CATEGORY': return { ...state, category: action.payload }
    case 'SET_SORT': return { ...state, sort: action.payload }
    default: return state
  }
}

