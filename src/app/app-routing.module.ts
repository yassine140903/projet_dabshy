import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticleComponent } from './article/article.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HelppComponent } from './helpp/helpp.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  { path: 'article', component: ArticleComponent},
  { path: 'list', component: ArticleListComponent},
  {path : 'template/:articleId', component: TemplateComponent},
  { path: 'profile/:userId', component: ProfileComponent },
  {path : '', component: HomePageComponent},
  {path : 'helpp', component: HelppComponent},
  {path : 'about', component: AboutComponent},
  {path : 'contact', component: ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
