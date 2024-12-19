import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SendCodeComponent } from './send-code/send-code.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sendCode', component: SendCodeComponent},
  {path: 'createAcc', component: CreateUserComponent},
  {path: 'userAcc', component: UserAccountComponent},
  {path: 'editUser', component: EditUserComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
