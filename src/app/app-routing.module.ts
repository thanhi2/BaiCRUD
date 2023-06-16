import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomePageComponent },
  { path: 'Create', component:CreatePageComponent},
  { path: 'View/:id', component:DetailPageComponent},
  { path: 'Edit/:id', component:EditPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
