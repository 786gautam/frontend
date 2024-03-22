import { Component, Inject, OnInit } from '@angular/core';
import { productService } from 'src/app/shared/product/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-managecategory',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {
  productservice: any;
  productform: any;
  toastr: any;
  auth: any;
  router: any;
  imgurl: any


  constructor(private productServices: productService, @Inject("imageurl") _imageurl: any) {
    this.imgurl = _imageurl
  }

  ngOnInit(): void {
    this.getalldata()
  }
  getimg(imgname:any){
    return this.imgurl+imgname
  }
  product() {
    this.productservice.loginap(this.productform.value).subscribe(
      (res: any) => {
        if (res.success) {
          setTimeout(() => {
            // this.spinner.hide()
          }, 3000)
          // alert("Login Successfully")
          this.toastr.success(res.message)
          this.auth.setdata(res)
          // this.router.navigateByUrl("/layout/manageproduct")

        }
        else {
          setTimeout(() => {
            // this.spinner.hide()
          }, 3000)
          // alert("Invalid email or password")
          this.toastr.error(res.message)
        }
      },
      (err: any) => {
        this.toastr.error(err)
      }
    )
  }

  alluser: any
  getalldata() {
    this.productServices.getallproductapi({ status: "Active" }).subscribe(
      (res: any) => {
        this.alluser = res.data

      },
      err => { }
    )
  }

  deleteData(_id: any) {
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
        this.productServices.deleteproductapi({ _id: _id, status: 'Inactive' }).subscribe(
          (res: any) => {
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
