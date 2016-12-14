import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import firebase from 'firebase';

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
	public userRef: any;

  constructor(public nav: NavController,public navParams: NavParams) {
  	this.nav = nav;
  	this.userProfile = navParams.get('userProfile');
    this.userSelected = navParams.get('userSelected');
    this.valor = navParams.get('valor');

    this.userRef = firebase.database().ref('/userProfile');

		this.userRef.on('value', usersList => {
		  let users = [];
		  usersList.forEach( user => {
		  	if(user.val().email == this.userSelected.email){this.userSelected = user.val(); this.userSelected.key = user.getKey()};
		  	if(user.val().email == this.userProfile.email) {this.userProfile  = user.val(); this.userProfile.key  = user.getKey()};
		  });
		});
  }

  ionViewDidLoad() {
    console.log('Hello ConfirmacionPage Page');
  }

	cancelTransfer(){
    this.nav.setRoot(HomePage); 	
	}

  proceedTranfer(){
  	var saldoSele : any = +this.userSelected.saldo - (-this.valor);
  	saldoSele = String(saldoSele);

  	var saldoCurr : any =  this.userProfile.saldo  - this.valor;
  	saldoCurr = String(saldoCurr);

  	this.userRef.child(this.userProfile.key).update({ saldo: saldoCurr, });
  	this.userRef.child(this.userSelected.key).update({ saldo: saldoSele, });
    
    this.nav.setRoot(HomePage);	
 	} 

}
