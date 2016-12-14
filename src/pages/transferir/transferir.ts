import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileData } from '../../providers/profile-data';
import { FormControl } from '@angular/forms';
/*
  Generated class for the Transferir page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transferir',
  templateUrl: 'transferir.html'
})
export class TransferirPage {
 	public numForm;
  public userProfile: any;
	public valor: any = "";
	public saldo: any;
	esDec : boolean = false;
	esFor : boolean = false;
  submitAttempt: boolean = false;
  numberChanged: boolean = false;
  diff: any;

  constructor(public nav: NavController,public profileData: ProfileData,public formBuilder: FormBuilder,) {
  	this.nav = nav;
    this.profileData = profileData;

    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
      console.log('userProfile:',this.userProfile);
      this.saldo = this.userProfile.saldo;
    });

     this.numForm = formBuilder.group({
        numero: ['', Validators.compose([,Validators.required])]
      });
  }

  numChanged(){
    this.numberChanged = true;
  }

  ionViewDidLoad() {
    console.log('Hello TransferirPage Page');
  }

  saldoSuficiente(f : FormControl){
  	return ( +this.valor > this.saldo)? true : false;
  }

  inputNumber(n: any,input){
  	
  	this.valor = String(this.valor);
  	n = String(n);

  	if (this.esDec) {																			// El string es decimal
  		if(this.valor.slice(-2) == '.0' && this.esFor){										// tiene un 0 forzado
  			if ( n != "." ){																	// n es un numero
  				console.log('n:',n);
  				this.valor = this.valor.slice(0,-1) + n;				// -> borrro el 0 pongo n
  				if( n ='0'){this.esFor = false;}
  			}																									// -> skip
  		}else{																							// no tiene 0 forzado
  			if ( n != "." ){																	// n es un numero
  				this.valor = this.valor + n;										// -> pongo n
  			}																									// -> skip
  		}
  	}else{																								// el string es entero
  		if ( n != "." ){																		// n es un numero
				this.valor = this.valor + n;											// -> pongo n
  		}else{																							// n es un punto
  			this.valor = this.valor + '.0';										// -> pongo .0
  			this.esDec = true;
  			this.esFor = true;
  		}
  	}
  	this.diff = this.saldo - (+this.valor);
  }

  delInput(){
  	if( this.valor != "" ){
  		if (this.valor[this.valor.length-2] != "."){
  			this.valor = this.valor.slice(0,-1);
  		}else{
  			this.valor = this.valor.slice(0,-2);
  			this.esDec = false;
  		}
  	}
  	this.diff = this.saldo - (+this.valor);
  }
}
