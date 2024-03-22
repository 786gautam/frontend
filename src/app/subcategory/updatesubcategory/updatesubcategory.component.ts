import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { categoryService } from 'src/app/shared/category/category.service';
import { subcategoryService } from 'src/app/shared/subcategory/subcategory.service';

@Component({
  selector: 'app-updatesubcategory',
  templateUrl: './updatesubcategory.component.html',
  styleUrls: ['./updatesubcategory.component.css']
})
export class UpdatesubcategoryComponent implements OnInit{

  AddsubcategoryForm = new FormGroup({
    _id : new FormControl(""),
    categoryId : new FormControl(""),
    subcategoryName : new FormControl(""),
    image : new FormControl(""),
  })

  constructor(private subcategoryservice : subcategoryService,private toastr : ToastrService,private categoryServices :categoryService,private activatedroute : ActivatedRoute,private router: Router){}
  ngOnInit(): void {
    this.getalldata()
    this.getsingledata()
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

  getsingledata(){
    this.subcategoryservice.getsinglesubcategoryapi({_id:this.activatedroute.snapshot.paramMap.get("_id")}).subscribe(
      (res:any)=>{
        console.log(res)
        this.AddsubcategoryForm.patchValue({'categoryId':res.data.categoryId._id})
        this.AddsubcategoryForm.patchValue({'_id':res.data._id})
        this.AddsubcategoryForm.patchValue({'subcategoryName':res.data.subcategoryName})
      },
      ()=>{

      }
    )
  }

  fileupload(event:any){
    console.log(event)
    this.AddsubcategoryForm.patchValue({image:event.target.files[0]})
  }
  catname:any
  subcatname:any
  subimg:any
  subid:any
  submit(){
    this.subid = this.AddsubcategoryForm.value._id
    this.catname = this.AddsubcategoryForm.value.categoryId
    this.subcatname = this.AddsubcategoryForm.value.subcategoryName
    this.subimg = this.AddsubcategoryForm.value.image
    var data = new FormData()
    data.append("categoryId",this.catname)
    data.append("subcategoryName",this.subcatname)
    data.append("image",this.subimg)
    data.append("_id",this.subid)

    this.subcategoryservice.updatesubcategoryapi(data).subscribe(
      (res:any)=>{
        // console.log(res)
        if(res.status == 200)
        {
          this.toastr.success(res.message)
          this.router.navigateByUrl("/layout/managesubcategory")
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
