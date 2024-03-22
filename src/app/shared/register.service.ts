import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiurl: any
  token: any
  single: any;
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any,private authservice:AuthService) {
    this.apiurl = _baseurl
    this.token= this.authservice.getToken()
  
  }

  adduserapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "user/add", form,{headers:header_token})
  }
}