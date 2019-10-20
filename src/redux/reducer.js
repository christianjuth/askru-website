
import {
  SEARCH_SET,
  SEARCH_RESULTS
} from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case SEARCH_SET:
      return {
        ...state,
        search: action.payload
      };
    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
}

export const initialState = {
  search: '',
  searchResults: []
};
