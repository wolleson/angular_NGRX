import { ActionReducerMap } from "@ngrx/store";
import { UserEffects } from "./user.effects";
import { userReducer, UserState } from "./user.reducers";

export interface AppState{
    users:UserState
}

export const appReducer: ActionReducerMap<AppState> = {
    users: userReducer
}

export const appEffects = [
    UserEffects
]