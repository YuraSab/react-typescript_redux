// const FETCH_USERS = "FETCH_USERS";
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";


export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

// interface UserAction {
//     type: string;
//     payload?: any;
// }

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FETCH_USERS_SUCCESS_Action {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FETCH_USERS_ERROR_Action {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUserAction | FETCH_USERS_SUCCESS_Action | FETCH_USERS_ERROR_Action;