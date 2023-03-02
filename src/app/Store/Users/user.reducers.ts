import { Action, createReducer, on } from "@ngrx/store";
import * as userActions from "../Users/user.actions"
import { User } from "src/app/Models/user";

export interface UserState {
    users: User[];
    user: User | null;
    erro: string | null
}

export const initialState: UserState = {
    users: [],
    user: null,
    erro: null
}

export function userReducer(state = initialState, action: Action) {
    return _userReducer(state, action);
}

const _userReducer = createReducer(
    initialState,
    on(userActions.LoadUsersSuccess, (state, { payload }) => ({ ...state, users: payload })),
    on(userActions.LoadUsersErro, (state, { error }) => ({ ...state, erro: error })),

    on(userActions.LoadUserSuccess, (state, { payload }) => ({ ...state, user: payload })),
    on(userActions.LoadUserErro, (state, { erro }) => ({ ...state, erro: erro })),

    on(userActions.CreateUserSuccess, (state, { payload }) => ({ ...state, users: [...state.users, payload] })),
    on(userActions.CreateUserErro, (state, { erro }) => ({ ...state, erro: erro })),

    on(userActions.UpdateUserSuccess, (state, { payload }) => ({
        ...state,
        users: state.users.map((user) => {
            if (user.id == payload.id) {
                return payload
            }
            return user;
        })
    })),
    on(userActions.UpdateUserErro, (state, { erro }) => ({ ...state, erro: erro })),

    on(userActions.DeleteUserSuccess, (state, { payload }) => ({
         ...state, 
         users: state.users.filter(user => user.id != payload) 
        })),
    on(userActions.CreateUserErro, (state, { erro }) => ({ ...state, erro: erro })),
)


