import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    NavComponent,
    ProductComponent,
    SliderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
