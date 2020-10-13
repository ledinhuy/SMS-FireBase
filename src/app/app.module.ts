import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WindowService } from './window.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWindowComponent } from './service-window/service-window.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyDPg5EBhX6qkYwrZwIRy7W_-uITG7swL1U",
  authDomain: "congnghemoi-12496.firebaseapp.com",
  databaseURL: "https://congnghemoi-12496.firebaseio.com",
  projectId: "congnghemoi-12496",
  storageBucket: "congnghemoi-12496.appspot.com",
  messagingSenderId: "828088726078",
  appId: "1:828088726078:web:f579ccb5daa642d56c176f",
  measurementId: "G-QNHK72ZP86"

};



@NgModule({
  declarations: [
    AppComponent,
    ServiceWindowComponent,
    PhoneLoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],

  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
