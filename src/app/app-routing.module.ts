import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AppComponent} from "./app.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:"''" , component : AppComponent},
  {path:"home" , component : HomeComponent},
  {path:"products" , component : ProductPageComponent},
  {path:"about-us" , component : AboutUsComponent},
  {path:"contact-us" , component : ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
