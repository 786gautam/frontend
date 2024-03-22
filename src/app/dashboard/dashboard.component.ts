import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';
import { DashboardService } from '../shared/dashboard/dashboard.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private router: Router, private toastr: ToastrService,  private dashbordservice: DashboardService) { }

  ngOnInit(): void {
    this.getdashbord()
  }

   getdashbord() {
    this.dashbordservice.dashboardapi({}).subscribe(
      (res: any) => {
          console.log(res)
      },
      err => {
        this.toastr.error(err)
      }
    )
  }


}

