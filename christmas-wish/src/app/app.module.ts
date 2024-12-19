import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WishesComponent } from './wishes/wishes.component';
import { WishDetailComponent } from './wishes/wish-detail/wish-detail.component';
import { WishEditComponent } from './wishes/wish-edit/wish-edit.component';
import { WishListComponent } from './wishes/wish-list/wish-list.component';
import { WishItemComponent } from './wishes/wish-list/wish-item/wish-item.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './header/dropdown.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SendCodeComponent } from './send-code/send-code.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { BackEndService } from './back-end.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserAccountComponent } from './user-account/user-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WishesComponent,
    WishDetailComponent,
    WishEditComponent,
    WishListComponent,
    WishItemComponent,
    HomeComponent,
    DropdownDirective,
    LoginComponent,
    SendCodeComponent,
    CreateUserComponent,
    EditUserComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
