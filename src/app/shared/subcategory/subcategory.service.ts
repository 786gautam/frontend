import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class subcategoryService {
  apiurl: any
  token: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any,private authservice:AuthService) {
    this.apiurl = _baseurl
    this.token= this.authservice.getToken()
  
  }

  addsubcategoryapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "subcategory/add", form)
  }

  getallsubcategoryapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "subcategory/getall", form)
  }
  
  getsinglesubcategoryapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "subcategory/getsingle", form)
  }
  
  deletesubcategoryapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "subcategory/changestatus", form)
  }

  updatesubcategoryapi(form: any) {
    var header_token = new HttpHeaders().set('Authorization',this.token
    );
    return this.http.post(this.apiurl + "subcategory/update", form)
  }
}