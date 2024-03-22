import { Component, Inject, OnInit } from '@angular/core';
import { subcategoryService } from '../shared/subcategory/subcategory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mencategory',
  templateUrl: './mencategory.component.html',
  styleUrls: ['./mencategory.component.css']
})
export class MencategoryComponent implements OnInit {
  data: any;
  id: any
  imgurl: any;
  constructor(private subcategoryservies: subcategoryService, private activatedroute: ActivatedRoute, @Inject("imageurl")_imageurl:any) {
    this.imgurl=_imageurl
   }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get("categoryId")
    // console.log(this.id)
    this.getallsubcategoryapi()
  }

  getimg(imgname:any){
    return this.imgurl+imgname
  }
  alluser: any
  categoryName : any
  getallsubcategoryapi() {
    this.subcategoryservies.getallsubcategoryapi({ categoryId: this.id, status: "Active" }).subscribe(
      (res: any) => {
        this.categoryName = res.data[0].categoryId.categoryName
        this.alluser = res.data

        console.log(this.alluser)

      },
      err => { }
    )
  }

}
