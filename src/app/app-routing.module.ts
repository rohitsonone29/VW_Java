import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookformComponent } from './bookform/bookform.component';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
  {
    path:'addbook',
    component:BookformComponent
  },
  {
    path:'listbooks',
    component:BooklistComponent
  },
  {
    path:'',
    redirectTo:'addbook',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
