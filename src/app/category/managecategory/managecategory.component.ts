import { Component, Inject, OnInit, inject } from '@angular/core';
import { categoryService } from 'src/app/shared/category/category.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit{
  imgeurl: any;
  getimg(imgname:any){
    return this.imgeurl+imgname
  }
  categoryservice: any;
  categoryform: any;
  toastr: any;
  auth: any;                                                     
  router: any;
 
  

  constructor(private categoryServices :categoryService, @Inject("imageurl") _imageurl: any ){
    this.imgeurl = _imageurl
  }
  ngOnInit(): void {
    this.getalldata()
  }
  category() {
    this.categoryservice.loginap(this.categoryform.value).subscribe(
      (res: any) => {
        if (res.success) {
          setTimeout(() => {
            // this.spinner.hide()
          }, 3000)
          // alert("Login Successfully")
          this.toastr.success(res.message)
           this.auth.setdata(res)
          // this.router.navigateByUrl("/layout/managecategory")
          
        }
        else {
          setTimeout(() => {
            // this.spinner.hide()
          }, 3000)
          // alert("Invalid email or password")
          this.toastr.error(res.message)
        }
      },
      (      err: any) => {
        this.toastr.error(err)
      }
    )
  }
  
  alluser:any
  getalldata()
  {
    this.categoryServices.getallcategoryapi({status:"Active"}).subscribe(
      (res:any)=>{
        this.alluser=res.data
    
      },
      err=>{}
    )
  }
  
  deleteData(_id:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryServices.deletecategoryapi({_id:_id,status:'Inactive'}).subscribe(
          (res:any)=>{
            this.getalldata()
          }
        )
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

}
