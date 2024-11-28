import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HandF/home/home.component';
import { HeaderComponent } from './HandF/header/header.component';
import { FooterComponent } from './HandF/footer/footer.component';
import { CreateFComponent } from './main/create-f/create-f.component';
import { DisplayFComponent } from './main/display-f/display-f.component';
import { LogInComponent } from './main/log-in/log-in.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'createF',component:CreateFComponent},
  {path:'displayF',component:DisplayFComponent},
  {path:'logIn',component:LogInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
