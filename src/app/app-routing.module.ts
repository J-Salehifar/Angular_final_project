import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'detail-page' , component : DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
