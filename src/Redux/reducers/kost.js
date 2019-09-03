const initialState = {
  isLoading: false,
  error: null,
  data: [],
  detail: {}
}

const kost = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_KOST':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }

    case 'GET_KOST_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_DETAIL_KOST':
      return {
        ...state,
        isLoading: false,
        detail: action.payload
      }

    case 'GET_DETAIL_KOST_PENDING':
      return {
        ...state,
        isLoading: true
      }

    default:
      return state
  }
}

export default kost