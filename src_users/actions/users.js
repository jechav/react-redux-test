export const USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED';
export const USERS_FETCH_COMPLETED = 'USERS_FETCH_COMPLETED';
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';

export function fetchUsers(){
  return { type: USERS_FETCH_REQUESTED };
}

