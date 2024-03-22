import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class productService {
  apiurl: any
  token: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any,private authservice:AuthService) {
    this.apiurl = _baseurl
    this.token= this.authservice.getToken()
  
  }

  addproductapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "product/add", form)
  }

  getallproductapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "product/getall", form)
  }
  
  getsingleproductapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "product/getsingle", form)
  }
  updateproductapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "product/update", form)
  }
  deleteproductapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "product/changestatus", form,{headers:header_token})
  }

}

