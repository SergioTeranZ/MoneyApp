import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { StartPage } from '../start/start';
import { AuthData } from '../../providers/auth-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController,public authData: AuthData) {
    
  }

  ionViewDidLoad(){
  	console.log("Hola desde el Home")
  }
	logOut(){
	  this.authData.logoutUser().then(() => {
	    this.nav.setRoot(StartPage);
	  });
	}

}
