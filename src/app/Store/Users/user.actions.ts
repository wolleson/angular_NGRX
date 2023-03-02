import { createAction, props } from "@ngrx/store";
import { User } from "src/app/Models/user";

export const enum userTypeAction {
    LOAD_USERS = '[LOADS_USER] LOAD USUARIOS',
    LOAD_USERS_SUCCESS = '[LOAD_USERS_SUCCESS] LOAD USUARIOS SUCCESS',
    LOAD_USERS_ERRO = '[LOAD_USERS_ERRO] LOAD USUARIOS ERRO',

    LOAD_USER = '[LOAD_USER] LOAD USUARIOS',
    LOAD_USER_SUCCESS = '[LOAD_USER_SUCCESS] LOAD USUARIOS SUCCESS',
    LOAD_USER_ERRO = '[LOAD_USER_ERRO] LOAD USUARIOS ERRO',

    CREATE_USER = '[CREATE_USER] CREATE USUARIOS',
    CREATE_USER_SUCCESS = '[CREATE_USER_SUCCESS] CREATE USUARIOS SUCCESS',
    CREATE_USER_ERRO = '[CREATE_USER_ERRO] CREATE USUARIOS ERRO',

    UPDATE_USER = '[UPDATE_USER] UPDATE USUARIOS',
    UPDATE_USER_SUCCESS = '[UPDATE_USER_SUCCESS] UPDATE USUARIOS SUCCESS',
    UPDATE_USER_ERRO = '[UPDATE_USER_ERRO] UPDATE USUARIOS ERRO',


    DELETE_USER = '[DELETE_USER] DELETE USUARIOS',
    DELETE_USER_SUCCESS = '[DELETE_USER_SUCCESS] DELETE USUARIOS SUCCESS',
    DELETE_USER_ERRO = '[DELETE_USER_ERRO] DELETE USUARIOS ERRO'
}

export const LoadUsers = createAction(
    userTypeAction.LOAD_USERS
)

export const LoadUsersSuccess = createAction(
    userTypeAction.LOAD_USERS_SUCCESS,
    props<{ payload: User[] }>()
)

export const LoadUsersErro = createAction(
    userTypeAction.LOAD_USERS_ERRO,
    props<{ error: string }>()
)

// <------------ find
export const LoadUser = createAction(
    userTypeAction.LOAD_USER,
    props<{payload: number}>
)

export const LoadUserSuccess = createAction(
    userTypeAction.LOAD_USER_SUCCESS,
    props<{ payload: User }>()
)

export const LoadUserErro = createAction(
    userTypeAction.LOAD_USER_ERRO,
    props<{ erro: string }>()
)

// <------------ CreateUser
export const CreateUser = createAction(
    userTypeAction.CREATE_USER,
    props<{payload: User}>()
)

export const CreateUserSuccess = createAction(
    userTypeAction.CREATE_USER_SUCCESS,
    props<{ payload: User }>()
)

export const CreateUserErro = createAction(
    userTypeAction.CREATE_USER_ERRO,
    props<{ erro: string }>()
)

// <------------ UpdateUser
export const UpdateUser = createAction(
    userTypeAction.UPDATE_USER,
    props<{payload: User}>
)

export const UpdateUserSuccess = createAction(
    userTypeAction.UPDATE_USER_SUCCESS,
    props<{ payload: User }>()
)

export const UpdateUserErro = createAction(
    userTypeAction.UPDATE_USER_ERRO,
    props<{ erro: string }>()
)

// <------------ DeleteUser
export const DeleteUser = createAction(
    userTypeAction.DELETE_USER,
    props<{payload: number}>
)

export const DeleteUserSuccess = createAction(
    userTypeAction.DELETE_USER_SUCCESS,
    props<{ payload: number }>()
)

export const DeleteUserErro = createAction(
    userTypeAction.DELETE_USER_ERRO,
    props<{ erro: string }>()
)