import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiurl: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any) {
    this.apiurl = _baseurl
  }

  dashboardapi(from: any) {
    return this.http.post(this.apiurl + "user/dashboard", from)
  }
}
