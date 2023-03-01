import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const favor = {
  favorite: [],
  displayFavorites: false,
};
const favReducer = (state = favor, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, displayFavorites: !state.displayFavorites };
    case ADD_FAVORITE:
      return { ...state, favorite: [...state.favorite, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};
export default favReducer;
