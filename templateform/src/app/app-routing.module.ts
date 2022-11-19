import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsComponent } from './forms/form.component';


const routes: Routes = [
  {path:'confirm', component: ConfirmComponent},
  {path:'home', component: FormsComponent},
  {path:'', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
