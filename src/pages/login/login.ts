
import { NavController,LoadingController,AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
/*tutorial*/
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { HomePage } from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm;
  constructor(public nav: NavController, public authData: AuthData, 
    public formBuilder: FormBuilder,public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController) {
  	 this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

}
