import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../shared/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  addForm = new FormGroup({
   name : new FormControl(""),  
   email: new FormControl(""),
   password  : new FormControl(""),
   contact : new FormControl(""),
   address : new FormControl(""),
   pincode : new FormControl(""),
   image : new FormControl("")
  })

  constructor(private Registerservice : RegisterService,private toastr : ToastrService){}
  ngOnInit(): void {
    
  }
  img:any
  fileupload(event:any){
    // console.log(event.target.files[0])
    // this.AddproductForm.patchValue({image:event.target.files[0]})
    this.img = event.target.files[0]
  }
  name:any
  email:any
  password:any
  contact:any
  address:any
  pincode:any
 

  submit(){
    this.name = this.addForm.value.name
    this.email= this.addForm.value.email
    this.password= this.addForm.value.password
    this.contact = this.addForm.value.contact
    this.address = this.addForm.value.address
    this.pincode= this.addForm.value.pincode

    var data = new FormData()
    data.append("name",this.name)
    data.append("email",this.email)
    data.append("password",this.password)
    data.append("image",this.img)
    data.append("contact",this.contact)
    data.append("address",this.address)
    data.append("pincode",this.pincode)
    

    this.Registerservice.adduserapi(data).subscribe(
      (res:any)=>{
        // console.log(res)
        if(res.status == 200)
        {
          this.toastr.success(res.message)
        }
        else{
          this.toastr.error(res.message)

        }
      },
      err=>{
        this.toastr.error(err)
      }

    )
  }
}