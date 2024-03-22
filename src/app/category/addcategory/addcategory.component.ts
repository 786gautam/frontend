import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { categoryService } from 'src/app/shared/category/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  addForm = new FormGroup({
    _id : new FormControl(),
    categoryName: new FormControl(""),
    image: new FormControl("")
  })

  constructor(private categoryservice: categoryService, private toastr: ToastrService) { }
  ngOnInit(): void {

  }
   categ:any
   
  imge: any
  fileupload(event: any) {
    // console.log(event.target.files[0])
    // this.AddproductForm.patchValue({image:event.target.files[0]})
    this.imge = event.target.files[0]
  }

  submit() {
    this.categ=this.addForm.value.categoryName
    var data = new FormData()
    data.append("categoryName",this.categ)
    data.append("image",this.imge)
    this.categoryservice.addcategoryapi(data).subscribe(
      (res: any) => {
        // console.log(res)
        if (res.status == 200) {
          this.toastr.success(res.message)
        }
        else {
          this.toastr.error(res.message)

        }
      },
      err => {
        this.toastr.error(err)
      }

    )
  }
}
