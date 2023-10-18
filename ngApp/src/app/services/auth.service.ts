import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _restiredUrl = "http://localhost:3000/api/register"

  constructor(private http:HttpClient) { }

  registerUser(user:User):Observable<User> {
    
    return this.http.post<User>(this._restiredUrl, user, {
      headers: { 'Accept': 'application/json'}
    })
  }
}
