import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginForm/login.component';
import { RegisterComponent } from './registerForm/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './userList/userList.component';
import { ProfileGaurdService } from './gaurds/profilegaurd.service';
import { UserGaurdService } from './gaurds/userGaurd.service';

const routes: Routes = [
  {path:'users',canActivate:[UserGaurdService], component: UserListComponent},
  {path:'profile',canActivate:[ProfileGaurdService], component: ProfileComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProfileGaurdService,
    UserGaurdService
  ]
})
export class AppRoutingModule { }
