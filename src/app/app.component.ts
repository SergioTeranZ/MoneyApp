import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

/*imports de Sergio*/
import { NavController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';

import firebase from 'firebase';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  rootPage : any = StartPage;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyBFb0qNrcCkC3LDPKVSR7a9bMfmLTtVy6E",
      authDomain: "moneyapp-39ca7.firebaseapp.com",
      databaseURL: "https://moneyapp-39ca7.firebaseio.com",
      storageBucket: "moneyapp-39ca7.appspot.com",
      messagingSenderId: "659225083239"
    });

    firebase.auth().onAuthStateChanged(user =>{
      if (user) {
        this.nav.setRoot(HomePage);
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
