import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Confirmacion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-confirmacion',
  templateUrl: 'confirmacion.html'
})
export class ConfirmacionPage {
	public userProfile : any;
	public userSelected : any;
	public valor : any;

  constructor(public nav: NavController,public navParams: NavParams) {
  	this.nav = nav;
  	this.userProfile = navParams.get('userProfile');
    this.userSelected = navParams.get('userSelected');
    this.valor = navParams.get('valor');
  }

  ionViewDidLoad() {
    console.log('Hello ConfirmacionPage Page');
  }

}
