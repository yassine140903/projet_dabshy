import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PostArticleComponent } from './post-article/post-article.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HelppComponent } from './helpp/helpp.component';
import { ContactComponent } from './contact/contact.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SignupComponent } from './signup/signup.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './product/product.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticleComponent,
    ProductPageComponent,
    ArticleListComponent,
    NavBarComponent,
    FooterComponent,
    PostArticleComponent,
    ProfileComponent,

    AboutComponent,
    HelppComponent,
    ContactComponent,
    AddArticleComponent,
    SignupComponent,
    MyhomeComponent,
    HerosectionComponent,
    AdminComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
