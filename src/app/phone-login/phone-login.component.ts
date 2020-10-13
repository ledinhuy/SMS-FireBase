import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';


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


export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`;
  }

}
@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  windowRef: any;
  phone:any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;
  constructor(public win: WindowService, public fireAuthService: AngularFireAuth) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    firebase.initializeApp(config);
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier
                  .render()
                  .then( widgetId => {
                    this.windowRef.recaptchaWidgetId = widgetId;
    });
  }
  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth()
            .signInWithPhoneNumber(this.phone, appVerifier)
            .then(result => {
                this.windowRef.confirmationResult = result;
            })
            .catch( error => console.log('error', error) );
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {
                    this.user = result.user;
                    console.log(result);
    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }

}
