import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavController } from 'ionic-angular';

/*imports de Sergio*/
import { HomePage } from  '../pages/home/home';
import { StartPage } from  '../pages/start/start';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { TransferirPage } from '../pages/transferir/transferir';
import { UserTransferPage } from '../pages/user-transfer/user-transfer';

import { AuthData } from '../providers/auth-data';
import { ProfileData } from '../providers/profile-data';
import { UsersData } from '../providers/users-data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    PerfilPage,
    TransferirPage,
    UserTransferPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    HomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    PerfilPage,
    TransferirPage,
    UserTransferPage    
  ],
  providers: [
    [{provide: ErrorHandler, useClass: IonicErrorHandler}],
    AuthData, 
    ProfileData,
    UsersData
  ]
})
export class AppModule {}
