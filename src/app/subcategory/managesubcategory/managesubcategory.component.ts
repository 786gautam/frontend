import { Component, Inject, OnInit } from '@angular/core';
import { subcategoryService } from 'src/app/shared/subcategory/subcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-managesubcategory',
  templateUrl: './managesubcategory.component.html',
  styleUrls: ['./managesubcategory.component.css']
})
export class ManagesubcategoryComponent implements OnInit{
imgeurl:any;
getimg(imgname:any){
  return this.imgeurl+imgname
}

  constructor(private subcategoryServices :subcategoryService,@Inject("imageurl")_imageurl:any ){
    this.imgeurl=_imageurl
  }
  ngOnInit(): void {
    this.getalldata()
  }

  alluser:any
  getalldata()
  {
    this.subcategoryServices.getallsubcategoryapi({status:"Active"}).subscribe(
      (res:any)=>{
        console.log(res)
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
        this.subcategoryServices.deletesubcategoryapi({_id:_id,status:'Inactive'}).subscribe(
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
