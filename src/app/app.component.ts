import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

/*imports de Sergio*/
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage : any;
  
  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyBFb0qNrcCkC3LDPKVSR7a9bMfmLTtVy6E",
      authDomain: "moneyapp-39ca7.firebaseapp.com",
      databaseURL: "https://moneyapp-39ca7.firebaseio.com",
      storageBucket: "moneyapp-39ca7.appspot.com",
      messagingSenderId: "659225083239"
    }); 

    
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {this.rootPage = LoginPage;}
      console.log('user:',user);
    }); 
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
