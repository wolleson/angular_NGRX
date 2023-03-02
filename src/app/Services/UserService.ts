import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../Models/user'

@Injectable({providedIn:'root'})
export class UsuariosService {

    constructor(private http: HttpClient) {


    }

    listUser() {
        return this.http.get<User[]>('http://localhost:3000/users')
    }

    getUser(id: number) {
        return this.http.get<User>('http://localhost:3000/users' + id)
    }

    addUser(user: User) {
        let header = new HttpHeaders();
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.post<User>('http://localhost:3000/users', JSON.stringify(user), {headers:header})
    }

    updateUser(user: User) {
        let header = new HttpHeaders();
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.put<User>('http://localhost:3000/users'+user.id, JSON.stringify(user), {headers:header})
     }

    deleteUser(id: number) {
        let header = new HttpHeaders();
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.delete('http://localhost:3000/users'+id,  {headers:header})
     }


}