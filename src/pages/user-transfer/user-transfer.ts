import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransferirPage } from '../transferir/transferir';

/*
  Generated class for the UserTransfer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-transfer',
  templateUrl: 'user-transfer.html'
})
export class UserTransferPage {
	currUser: any;

  constructor(public nav: NavController,public navParams: NavParams) {
    this.currUser = navParams.get('userProfile');
    console.log(this.currUser.saldo);
  }

  ionViewDidLoad() {
    console.log('Hello UserTransferPage Page');
  }

	goToTransfer(userProfile){
    this.nav.push(TransferirPage,{userProfile: userProfile});
	}
}
