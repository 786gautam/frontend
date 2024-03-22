import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService  implements OnInit{

  apiurl: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any) {
    this.apiurl = _baseurl
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
