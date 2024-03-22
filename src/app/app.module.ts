import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ManagecategoryComponent } from './category/managecategory/managecategory.component';
import { DelecategoryComponent } from './category/delecategory/delecategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
import { AddsubcategoryComponent } from './subcategory/addsubcategory/addsubcategory.component';
import { UpdatesubcategoryComponent } from './subcategory/updatesubcategory/updatesubcategory.component';
import { ManagesubcategoryComponent } from './subcategory/managesubcategory/managesubcategory.component';
import { DelesubcategoryComponent } from './subcategory/delesubcategory/delesubcategory.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { DeleproductComponent } from './product/deleproduct/deleproduct.component';
import { ManageproductComponent } from './product/manageproduct/manageproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SubcategoryComponent } from './subcategory/subcategory/subcategory.component';
import { ProductComponent } from './product/product/product.component';
import { CustomerlayoutComponent } from './customerlayout/customerlayout.component';
import { CustomerheaderComponent } from './customerlayout/customerheader/customerheader.component';
import { CustomerfooterComponent } from './customerlayout/customerfooter/customerfooter.component';
import { CustomercategoryComponent } from './customercategory/customercategory.component';
import { MencategoryComponent } from './mencategory/mencategory.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    CategoryComponent,
    AddcategoryComponent,
    ManagecategoryComponent,
    DelecategoryComponent,
    UpdatecategoryComponent,
    AddsubcategoryComponent,
    UpdatesubcategoryComponent,
    ManagesubcategoryComponent,
    DelesubcategoryComponent,
    AddproductComponent,
    DeleproductComponent,
    ManageproductComponent,
    UpdateproductComponent,
    SubcategoryComponent,
    ProductComponent,
    CustomerlayoutComponent,
    CustomerheaderComponent,
    CustomerfooterComponent,
    CustomercategoryComponent,
    MencategoryComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
