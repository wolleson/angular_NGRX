import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducers";

const getUserFeatureState = createFeatureSelector<UserState>('users');


export const getUsers = createSelector(
    getUserFeatureState,
    (state: UserState) => state.users
)

export const getUser = createSelector(
    getUserFeatureState,
    (state: UserState) => state.user
)

export const getUsersAdmin = createSelector(
    getUserFeatureState,
    (state: UserState) => state.users.filter((user) => user.profil == 'admin')
)