import { NgModule } from '@angular/core';
import {  RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: 'home',component:HomeComponent,},
{path: 'about',component:AboutComponent},
{path: 'footer',component:FooterComponent},
{path: 'slider',component:SliderComponent},
{path: 'product',component:ProductComponent},
{path: 'login',component:LoginComponent},
{path: 'intro',component:IntroComponent}
];

@NgModule({
  
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
