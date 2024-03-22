import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class categoryService {
  apiurl: any
  token: any
  single: any;

  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any,private authservice:AuthService) {
    this.apiurl = _baseurl
    this.token= this.authservice.getToken()
  
  }

  addcategoryapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "category/add", form)
  }

  getallcategoryapi(form: any) {
    // console.log(form)
    var header_token = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl + "category/getall", form)
  }
  
  getsinglecategoryapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "category/getsingle", form)
  }
  
  updatecategoryapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "category/update", form)
  }
  
  deletecategoryapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "category/chanzgestatus", form)
  }
}

