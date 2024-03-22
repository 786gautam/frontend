import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../shared/login/login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  
  constructor(private router: Router, private toastr: ToastrService,  private auth: AuthService, private loginservice: LoginService) { }

  ngOnInit(): void {

  }
  login() {
    this.loginservice.loginap(this.loginform.value).subscribe(
      (res: any) => {
        if (res.success) {
          setTimeout(() => {
            // this.spinner.hide()
          }, 3000)
          // alert("Login Successfully")
          this.toastr.success(res.message)
           this.auth.setdata(res)
          this.router.navigateByUrl("/layout/Home")
          
        }
        else {
          setTimeout(() => {
            // this.spinner.hide()
          }, 3000)
          // alert("Invalid email or password")
          this.toastr.error(res.message)
        }
      },
      err => {
        this.toastr.error(err)
      }
    )
  }


}

