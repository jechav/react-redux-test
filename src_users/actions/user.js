export const USERS_CREATE_REQUESTED = 'USERS_CREATE_REQUESTED';
export const USERS_CREATE_SUCCEEDED = 'USERS_CREATE_SUCCEEDED';
export const USERS_CREATE_FAILED = 'USERS_CREATE_FAILED';

export const USERS_UPDATE_REQUESTED = 'USERS_UPDATE_REQUESTED';
export const USERS_UPDATE_SUCCEEDED = 'USERS_UPDATE_SUCCEEDED';
export const USERS_UPDATE_FAILED = 'USERS_UPDATE_FAILED';


export function createUser(data){
  return { type: USERS_CREATE_REQUESTED, data };
}

export function updateUser(id, data){
  return { type: USERS_UPDATE_REQUESTED, id, data };
}
