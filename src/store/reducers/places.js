import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE
} from '../actions/actionTypes'

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri: 'https://images.unsplash.com/photo-1539889128541-6293f3fa0e0a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=5c6018094fd62992c56dbbaab99d99cc'
          }
        })
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => place.key !== state.selectedPlace.key),
        selectedPlace: null
      }
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.key)
      }
    case UNSELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      }
    default:
      return state
  }
}

export default reducer