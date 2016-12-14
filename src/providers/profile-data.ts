import { Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable()
export class ProfileData {
  // Nodo de la BD
  userProfile: any; 
  // nodo de ususario actual
  currentUser: any; 

  constructor() {
    this.currentUser = firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/userProfile');
  }

  /**
  * funcion getUserProfile no recibe parametros
  * retorma una referencia a la BD al uid del usuario actual
  * se usa par atraer la info del usuario a la pagina
  */
  getUserProfile(): any {
    return this.userProfile.child(this.currentUser.uid);
  }

  /**
  * Actualiza nombre y apellido del usuario
  */
  updateName(firstName: string, lastName: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      firstName: firstName,
      lastName: lastName,
    });
  }

  /**
  * Actualiza fecha de nacimiento del usuario
  */
  updateDOB(birthDate: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      birthDate: birthDate,
    });
  }

  /**
  * recibe el email del usuario
  * cambia el correo en el user autenticado en firebase
  * luedo de cambair el correo del usuario autenticado, lo cambia en la BD
  */
  updateEmail(newEmail: string): any {
    this.currentUser.updateEmail(newEmail).then(() => {
      this.userProfile.child(this.currentUser.uid).update({
        email: newEmail
      });
    }, (error) => {
      console.log(error);
    });
  }

  /**
  * Cambia la contrasena del usuario autenticado
  */
  updatePassword(newPassword: string): any {
    this.currentUser.updatePassword(newPassword).then(() => {
      console.log("Se cambio la contrasena");
    }, (error) => {
      console.log(error);
    });
  }
}