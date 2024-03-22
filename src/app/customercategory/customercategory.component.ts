import { Component, Inject, OnInit } from '@angular/core';
import { categoryService } from '../shared/category/category.service';

@Component({
  selector: 'app-customercategory',
  templateUrl: './customercategory.component.html',
  styleUrls: ['./customercategory.component.css']
})
export class CustomercategoryComponent implements OnInit{
data: any;
imgurl:any;

constructor(private categoryServices: categoryService, @Inject("imageurl") _imageurl: any) {
  this.imgurl = _imageurl
}

  
 
  ngOnInit(): void {
    this.getalldata()
  }
  
  getimg(imgname:any){
    return this.imgurl+imgname
  }
  
  alluser:any
  getalldata()
  {
    this.categoryServices.getallcategoryapi({status:"Active"}).subscribe(
      (res:any)=>{
        this.alluser=res.data
        console.log(this.alluser)
    
      },
      err=>{}
    )
  }
  
}
