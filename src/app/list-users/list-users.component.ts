import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../Models/user';
import * as userActions from "../Store/Users/user.actions"
import * as userSelectors from "../Store/Users/user.selector"
import { AppState } from '../Store/Users/app-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  listUser$: Observable<User[]> = this.store.select(userSelectors.getUsers);
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(userActions.LoadUsers())
  }

}
