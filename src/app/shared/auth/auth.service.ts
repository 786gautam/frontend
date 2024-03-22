import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  setdata(result:any){
    localStorage.setItem('em',result.data.email)
    localStorage.setItem('usertype',result.data.usertype)
    localStorage.setItem('token',result.token)
  }

  getEmail(){
    return localStorage.getItem('em')
  }
  
  getUserType(){
    return localStorage.getItem('usertype')
  }
  
  getToken(){
    return localStorage.getItem('token')
  }

  removedata(){
    localStorage.clear()
  }
}
