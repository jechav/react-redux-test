export const USERS_CREATE_UPDATE_REQUESTED = 'USERS_CREATE_UPDATE_REQUESTED';
export const USERS_CREATE_UPDATE_SUCCEEDED = 'USERS_CREATE_UPDATE_SUCCEEDED';
export const USERS_CREATE_UPDATE_FAILED = 'USERS_CREATE_UPDATE_FAILED';

export const SET_USER = 'SET_USER';

export function createUpdateUser(data){
  return { type: USERS_CREATE_UPDATE_REQUESTED, data };
}

export function setUser(user){
  return { type: SET_USER, user }
}
