import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../Models/user';
import { UsuariosService } from '../Services/UserService';
import { AppState } from '../Store/Users/app-state';
import * as userActions from "../Store/Users/user.actions"

@Component({
  selector: 'app-creat-users',
  templateUrl: './creat-users.component.html',
  styleUrls: ['./creat-users.component.scss']
})
export class CreatUsersComponent implements OnInit {
  model: User = { id: 0, name: '', age: 0, profil: '' }

  constructor( private store: Store<AppState>) { }
  ngOnInit(): void {
  }

  save() {
    if (this.model.id == 0){
      this.store.dispatch(userActions.CreateUser({payload:this.model}));
    }else{
     
    }
  }
}
