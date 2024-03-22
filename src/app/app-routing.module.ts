import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { DelecategoryComponent } from './category/delecategory/delecategory.component';
import { ManagecategoryComponent } from './category/managecategory/managecategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
import { AddsubcategoryComponent } from './subcategory/addsubcategory/addsubcategory.component';
import { DelesubcategoryComponent } from './subcategory/delesubcategory/delesubcategory.component';
import { ManagesubcategoryComponent } from './subcategory/managesubcategory/managesubcategory.component';
import { UpdatesubcategoryComponent } from './subcategory/updatesubcategory/updatesubcategory.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { DeleproductComponent } from './product/deleproduct/deleproduct.component';
import { ManageproductComponent } from './product/manageproduct/manageproduct.component';
import { SubcategoryComponent } from './subcategory/subcategory/subcategory.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ProductComponent } from './product/product/product.component';
import { CustomerlayoutComponent } from './customerlayout/customerlayout.component';
import { CustomercategoryComponent } from './customercategory/customercategory.component';
import { MencategoryComponent } from './mencategory/mencategory.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/layout/login', pathMatch: 'full'
  },

  {
    path: 'layout', component: LayoutComponent,
    children: [

      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'Home', component: HomeComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'category', component: CategoryComponent
      },
      {
        path: 'addcategory', component: AddcategoryComponent
       },
      {
        path: 'delecategory', component: DelecategoryComponent
      },
      {
        path: 'managecategory', component: ManagecategoryComponent
      },
      {
        path: 'updatecategory/:_id', component: UpdatecategoryComponent
      },
      {
        path: 'subcategory', component: SubcategoryComponent
      },
      {
        path: 'addsubcategory', component: AddsubcategoryComponent
      },
      {
        path: 'delesubcategory', component: DelesubcategoryComponent
      },
      {
        path: 'managesubcategory', component: ManagesubcategoryComponent
      },
      {
        path: 'updatesubcategory/:_id', component: UpdatesubcategoryComponent
      },
      {
        path: 'addproduct', component: AddproductComponent
      },
      {
        path: 'deleproduct', component: DeleproductComponent
      },
      {
        path: 'manageproduct', component: ManageproductComponent
      },
      {
        path: 'product', component: ProductComponent
      },
      {
        path: 'updateproduct/:_id', component: UpdateproductComponent
      }

    ]
  },

  {
    path: "customerlayout", component: CustomerlayoutComponent,
    children: [
      {
        path: 'customer-category', component: CustomercategoryComponent
      },
      // {
      //   path:'category/:categoryId', component: subcategoryComponent
      // },
      {
        path:'category/:categoryId', component: MencategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
