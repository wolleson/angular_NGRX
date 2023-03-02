import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { UsuariosService } from '../../Services/UserService';
import * as userActions from "../Users/user.actions"

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UsuariosService) { }

    loadUsers$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(userActions.userTypeAction.LOAD_USERS),
                exhaustMap(() => this.userService.listUser()
                    .pipe(
                        map(payload =>
                            userActions.LoadUsersSuccess({ payload }),
                            catchError(error => of(userActions.LoadUsersErro({error})))
                        )
                    ))
            )
    )

    loadUser$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(userActions.userTypeAction.LOAD_USER),
                exhaustMap((record:any) => this.userService.getUser(record.payload)
                    .pipe(
                        map(payload =>
                            userActions.LoadUserSuccess({ payload }),
                            catchError(erro => of(userActions.LoadUserErro({erro})))
                        )
                    ))
            )
    )

    createUser$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(userActions.userTypeAction.CREATE_USER),
                exhaustMap((record:any) => this.userService.addUser(record.payload)
                    .pipe(
                        map(payload =>
                            userActions.CreateUserSuccess({ payload }),
                            catchError(erro => of(userActions.CreateUserErro({erro})))
                        )
                    ))
            )
    )

    updateUser$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(userActions.userTypeAction.UPDATE_USER),
                exhaustMap((record:any) => this.userService.updateUser(record.payload)
                    .pipe(
                        map(payload =>
                            userActions.UpdateUserSuccess({ payload }),
                            catchError(erro => of(userActions.UpdateUserErro({erro})))
                        )
                    ))
            )
    )

    deleteUser$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(userActions.userTypeAction.DELETE_USER),
                exhaustMap((record:any) => this.userService.deleteUser(record.payload)
                    .pipe(
                        map(() =>
                            userActions.DeleteUserSuccess({payload:record.payload}),
                            catchError(erro => of(userActions.DeleteUserErro({erro})))
                        )
                    ))
            )
    )
}