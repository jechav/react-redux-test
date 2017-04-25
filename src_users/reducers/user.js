
import {
  USERS_CREATE_UPDATE_REQUESTED,
  USERS_CREATE_UPDATE_SUCCEEDED,
  USERS_CREATE_UPDATE_FAILED,

  SET_USER

} from '../actions/user';

// users reducer
export default function user(state = [], action) {
  switch (action.type) {
    case USERS_CREATE_UPDATE_REQUESTED:
      return {
        isWorking: true,
        data: action.data
      }
    case USERS_CREATE_UPDATE_SUCCEEDED:
      return {
        isWorking: false,
        done: true,
      }
    case USERS_CREATE_UPDATE_FAILED:
      return {
        isWorking: false,
        done: false,
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
