import { NavController,AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ProfileData } from '../../providers/profile-data';
import { AuthData } from '../../providers/auth-data';
import { StartPage } from '../start/start';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userProfile: any;
  public birthDate: string;
  public saldo: any;

  constructor(public nav: NavController,public profileData: ProfileData,public authData: AuthData,public alertCtrl: AlertController) {
    this.nav = nav;
    this.profileData = profileData;

    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
      console.log('userProfile:',this.userProfile);
      this.birthDate = this.userProfile.birthDate;
    });

  }

  updateName(){
    let alert = this.alertCtrl.create({
      message: "Nombre y Apellido",
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Nombre',
          value: this.userProfile.firstName
        },
        {
          name: 'lastName',
          placeholder: 'Apellido',
          value: this.userProfile.lastName
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Guardar',
          handler: data => {
            this.profileData.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(birthDate){
    this.profileData.updateDOB(birthDate);
  }

  updateEmail(){
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newEmail',
          placeholder: 'Correo nuevo',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Guardar',
          handler: data => {
            this.profileData.updateEmail(data.newEmail);
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword(){
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Contraseña Nueva',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Guardar',
          handler: data => {
            this.profileData.updatePassword(data.newPassword);
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad(){
  	console.log("Hola desde el Home");
  }

	logOut(){
	  this.authData.logoutUser().then(() => {
	    this.nav.setRoot(StartPage);
      this.userProfile = null;
	  });
	}

}
