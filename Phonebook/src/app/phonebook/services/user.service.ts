import { Injectable } from '@angular/core';
import { User } from '../models/user'
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class UserService {

  getUserById(id: number) {
    return this.dataStore.users.find(x=>x.id == id)
  }
  private _users: BehaviorSubject<User[]>

  private dataStore:{
    users: User[]
  }

  constructor(private http: HttpClient) { 
    this.dataStore = { users:[]}
    this._users = new BehaviorSubject<User[]>([])   
  }
  
  get users(): Observable<User[]>{
    return this._users.asObservable();
  }

  loaddAll(){
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users'
    return this.http.get<User[]>(usersUrl)
    .subscribe(data =>{
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users)
    }, error =>{
      console.log("Faild to log users")
    })
  }
}
