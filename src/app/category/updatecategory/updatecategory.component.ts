import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { categoryService } from 'src/app/shared/category/category.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  addform1 = new FormGroup({
    _id: new FormControl(),
    categoryName: new FormControl(),
    image: new FormControl("")

  })

  constructor(private categoryservice: categoryService, private toastr: ToastrService, private router: Router, private activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.addform1.patchValue({ "_id": this.activatedroute.snapshot.paramMap.get('_id') })
    this.getsingledata()
  }
  
  allcategory: any
  getsingledata() {
    this.categoryservice.getsinglecategoryapi({ _id: this.activatedroute.snapshot.paramMap.get("_id") }).subscribe(
      (res: any) => {
        console.log(res)
        this.addform1.patchValue({ 'categoryName': res.data.categoryName })
        this.addform1.patchValue({ '_id': res.data._id })
      },
      () => {

      }
    )
  }
  img: any
  cate:any
  id:any

  fileupload(event: any) {
    // console.log(event.target.files[0])
    // this.AddproductForm.patchValue({image:event.target.files[0]})
    this.img = event.target.files[0]
  }

  submit() {
    this.cate= this.addform1.value.categoryName
    this.id= this.addform1.value._id

    var data = new FormData()
    data.append("_id",this.id)
    data.append("categoryName",this.cate)
    data.append("image",this.img)
    this.categoryservice.updatecategoryapi(data).subscribe(
      (res: any) => {
        // console.log(res)
        if (res.status == 200) {
          this.toastr.success(res.message)
          this.router.navigateByUrl("/layout/managecategory")
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
