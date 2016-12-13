import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
/*
  Generated class for the Start page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public nav: NavController) {}

  ionViewDidLoad() {
    /*console.log('Hello StartPage Page');*/
  }


	irARegistro(){
	  this.nav.push(SignupPage);
	}

	irALogin(){
 	 	this.nav.push(LoginPage);
	}

}
