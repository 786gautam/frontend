import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { categoryService } from 'src/app/shared/category/category.service';
import { subcategoryService } from 'src/app/shared/subcategory/subcategory.service';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit{

  AddsubcategoryForm = new FormGroup({
    categoryId : new FormControl(""),
    subcategoryName : new FormControl(""),
    image : new FormControl(""),
  })

  constructor(private subcategoryservice : subcategoryService,private toastr : ToastrService,private categoryServices :categoryService){}
  ngOnInit(): void {
    this.getalldata()
  }
allsubcategory:any
  allcategory:any
  getalldata()
  {
    this.categoryServices.getallcategoryapi({status:"Active"}).subscribe(
      (res:any)=>{
        this.allcategory=res.data
      },
      err=>{}
    )
  }
  fileupload(event:any){
    console.log(event)
    this.AddsubcategoryForm.patchValue({image:event.target.files[0]})
  }
  catname:any
  subcatname:any
  subimg:any
  submit(){
    this.catname = this.AddsubcategoryForm.value.categoryId
    this.subcatname = this.AddsubcategoryForm.value.subcategoryName
    this.subimg = this.AddsubcategoryForm.value.image
    var data = new FormData()
    data.append("categoryId",this.catname)
    data.append("subcategoryName",this.subcatname)
    data.append("image",this.subimg)

    this.subcategoryservice.addsubcategoryapi(data).subscribe(
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
