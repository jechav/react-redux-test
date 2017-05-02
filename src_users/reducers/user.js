
import {
  USERS_CREATE_UPDATE_REQUESTED,
  USERS_CREATE_UPDATE_SUCCEEDED,
  USERS_CREATE_UPDATE_FAILED,

  SET_USER

} from '../actions/user';

const initialState = {
  isWorking: false,
  isDone: false,
}
// users reducer
export default function user(state = initialState, action) {
  switch (action.type) {
    case USERS_CREATE_UPDATE_REQUESTED:
      return {
        isWorking: true,
        isDone: false,
        data: action.data
      }
    case USERS_CREATE_UPDATE_SUCCEEDED:
      return {
        isWorking: false,
        isDone: true,
      }
    case USERS_CREATE_UPDATE_FAILED:
      return {
        isWorking: false,
        isDone: false,
        message: action.message
      }

    case SET_USER:
      return {
        data: action.user
      }


    // initial state
    default:
      return state;
  }
}
