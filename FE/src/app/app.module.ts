import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { DescriptionComponent } from './modules/description/description.component';
import { RentAlbumComponent } from './popups/rent-album/rent-album.component';
import { BuyAlbumComponent } from './popups/buy-album/buy-album.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    DescriptionComponent,
    RentAlbumComponent,
    BuyAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
