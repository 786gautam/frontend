import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiurl: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any) {
    this.apiurl = _baseurl
  }

  loginap(from: any) {
    return this.http.post(this.apiurl + "user/login", from)
  }
}
