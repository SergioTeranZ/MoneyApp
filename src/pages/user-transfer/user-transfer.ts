import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransferirPage } from '../transferir/transferir';
//import { UsersData } from '../../providers/users-data';
import firebase from 'firebase';



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
	userRef: any;
	userSelected: any = null;
	
	userList: any;
	loadedUserList: any;

  constructor(public nav: NavController,public navParams: NavParams) {
    //this.userData = UsersData;
    this.currUser = navParams.get('userProfile');
    this.userRef = firebase.database().ref('/userProfile');


		this.userRef.on('value', usersList => {
		  let users = [];
		  usersList.forEach( user => {
		  	if(user.val().email != this.currUser.email){users.push(user.val());}
		  });
		  this.userList = users;
		  this.loadedUserList = users;
		});
  }

  ionViewDidLoad() {
    console.log('Hello UserTransferPage Page');
  }

	initializeItems(){
  	this.userList = this.loadedUserList;
	}

	goToTransfer(userProfile,userSelected){
    this.nav.push(TransferirPage,{userProfile: userProfile,userSelected:userSelected});
	}

	getItems(searchbar) {
	  // Reset items back to all of the items
	  this.initializeItems();

	  // set q to the value of the searchbar
	  var q = searchbar.srcElement.value;


	  // if the value is an empty string don't filter the items
	  if (!q || q ==" ")  {
	    return;
	  }

	  this.userList = this.userList.filter((v) => {
	    if(v.email && q) {
	      if (v.email.toLowerCase().indexOf(q.toLowerCase()) > -1) {
	        return true;
	      }
	      return false;
	    }
	  });
	}

	selectUser(user){
		this.userSelected = user;
	}

}
