import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { categoryService } from 'src/app/shared/category/category.service';
import { productService } from 'src/app/shared/product/product.service';
import { subcategoryService } from 'src/app/shared/subcategory/subcategory.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{

  AddproductForm = new FormGroup({
    categoryId : new FormControl(""),
    subcategoryId : new FormControl(""),
    productTitle: new FormControl(""),
    Price : new FormControl(""),
    Quantity : new FormControl(""),
    Description: new FormControl(""),
    image : new FormControl(""),
  })

  constructor(private productservice : productService,private toastr : ToastrService,private categoryservice : categoryService, private subcategoryservice : subcategoryService){}
  ngOnInit(): void {
    this.getalldata()
    this.getallsubcatdata()
  }

  allcategory:any
  getalldata()
  {
    this.categoryservice.getallcategoryapi({status:"Active"}).subscribe(
      (res:any)=>{
        console.log(res.data)
        this.allcategory=res.data
      },
      err=>{}
    )
  }

  allsubcategory:any
  getallsubcatdata()
  {
    this.subcategoryservice.getallsubcategoryapi({status:"Active"}).subscribe(
      (res:any)=>{
        console.log(res.data)
        this.allsubcategory=res.data
      },
      err=>{}
    )
  }

  img:any
  fileupload(event:any){
    // console.log(event.target.files[0])
    // this.AddproductForm.patchValue({image:event.target.files[0]})
    this.img = event.target.files[0]
  }

  price:any
  description:any
  quantity:any
  cate:any
  name:any
  subcatname:any
  submit(){
    this.name = this.AddproductForm.value.productTitle
    this.cate= this.AddproductForm.value.categoryId
    this.subcatname = this.AddproductForm.value.subcategoryId
    this.price = this.AddproductForm.value.Price
    this.description = this.AddproductForm.value.Description
    this.quantity = this.AddproductForm.value.Quantity
    // console.log(this.AddproductForm.value)
    var data = new FormData()
    data.append("categoryId",this.cate)
    data.append("productTitle",this.name)
    data.append("subcategoryId",this.subcatname)
    data.append("image",this.img)
    data.append("Price",this.price)
    data.append("Description",this.description)
    data.append("Quantity",this.quantity)
    
    this.productservice.addproductapi(data).subscribe(
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
