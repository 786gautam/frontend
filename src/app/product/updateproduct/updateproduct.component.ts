import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { productService } from 'src/app/shared/product/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit{

  addform = new FormGroup({
    _id: new FormControl(),
    categoryId : new FormControl(""),
    subcategoryId : new FormControl(""),
    productTitle: new FormControl(""),
    Price : new FormControl(""),
    Quantity : new FormControl(""),
    Description: new FormControl(""),
    image : new FormControl(""),
  })
  categoryservice: any;
  subcategoryservice: any;

  constructor(private productservice : productService,private toastr : ToastrService,private router : Router,private activatedroute : ActivatedRoute){

  }

  ngOnInit(): void {
    this.addform.patchValue({"_id":this.activatedroute.snapshot.paramMap.get('_id')})
    this.getsingledata()
  } 
  allcategory:any
  getalldata()
  {
    this.categoryservice.getallcategoryapi({status:"Active"}).subscribe(
      (res:any)=>{
        console.log(res.data)
        this.allcategory=res.data
      },
      {}
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
      {}
    )
  }
     allproduct:any
  getsingledata(){
    this.productservice.getsingleproductapi({_id:this.activatedroute.snapshot.paramMap.get("_id")}).subscribe(
      (res:any)=>{
        console.log(res)
        this.addform.patchValue({'productTitle':res.data.productTitle})
        this.addform.patchValue({'_id':res.data._id})
        this.addform.patchValue({'categoryId':res.data.categoryId.categoryName})
        this.addform.patchValue({'subcategoryId':res.data.subcategoryId.subcategoryName})
        this.addform.patchValue({'Price':res.data.Price})
        this.addform.patchValue({'Quantity':res.data.Quantity})
        this.addform.patchValue({'Description':res.data.Description})
       
      },
      ()=>{

      }
    )
  }
  img:any
  fileupload(event:any){
    // console.log(event.target.files[0])
    // this.AddproductForm.patchValue({image:event.target.files[0]})
    this.img = event.target.files[0]
  }
   id:any
   categoryId:any
   subcategoryId:any
   ProductTitle:any
   Price:any
   Image:any
   Quantity:any
   Description:any

  submit(){
    this.id = this.addform.value._id
    this.categoryId=this.addform.value.categoryId
    this.subcategoryId=this.addform.value.subcategoryId
    this.ProductTitle=this.addform.value.productTitle
    this.Price=this.addform.value.Price
    this.Image=this.addform.value.image
    this.Quantity=this.addform.value.Quantity
    this.Description=this.addform.value.Description
    var data = new FormData()
    data.append("_id",this.id)
    data.append("categoryId",this.categoryId)
    data.append("subcategoryId",this.subcategoryId)
    data.append("productTitle",this.ProductTitle)
    data.append("Price",this.Price)
    data.append("image",this.Image)
    data.append("Quantity",this.Quantity)
    data.append("Description",this.Description)
    this.productservice.updateproductapi(this.addform.value).subscribe(
      (res:any)=>{
        // console.log(res)
        if(res.status == 200)
        {
          this.toastr.success(res.message)
          this.router.navigateByUrl("/layout/manageproduct")
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
