
import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_COMPLETED,
  USERS_FETCH_FAILED,

} from '../actions/users';

// users reducer
export default function users(state = [], action) {
  switch (action.type) {
    case USERS_FETCH_REQUESTED:
      return {
        ...state,
        isFetching: true,
      }
    case USERS_FETCH_COMPLETED:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      }
    case USERS_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        message: action.message
      }

    // initial state
    default:
      return state;
  }
}
