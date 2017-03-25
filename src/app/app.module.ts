import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';

import { NavbarComponent} from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { IosComponent } from './components/ios/ios.component';
import { AndroidComponent } from './components/android/android.component';
import {routing} from './app.routing';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, IosComponent, AndroidComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
