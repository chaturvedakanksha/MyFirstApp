import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import {MessageService} from '../../providers/message/message';
import { LoginPage } from '../login/login';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import { FirebaseDatabaseService } from '../../providers/firebase-database-service/firebase-database-service';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

user = {} as User;
//dbuser : Observable<any[]>;
  constructor(public authservice: AuthService, public navCtrl: NavController, public navParams: NavParams, public mesServ:MessageService,private dbserv:FirebaseDatabaseService) {
    
   

  }

  signUp(user : User)
  {
    this.authservice.signup(user.email,user.password).then(result1 =>{
      //console.log("my signed Up: "+result);
      if(result1 == 1)
      {
         this.dbserv.writeUserData(this.authservice.getUID(),user).then(result => {
        if(result==1)        
       { 
         this.navCtrl.push(LoginPage);
         this.mesServ.showAlert('Congrats!','You are registered successfully, please verify your account by clicking on the link sent on your email.'); 
       }
    });
  }
      else 
      {
          if(result1 == 2)
          this.mesServ.presentToast('Weak Password');
          else if(result1 == 3)
          this.mesServ.presentToast('Email already in use');
          else if(result1 == 4)
          this.mesServ.presentToast('Invalid Email address');
          else
          this.mesServ.presentToast('Somthing went wrong');
      }        
          });
 
    
  //  this.dbserv.writeUserData(user).then(result => {
  //         this.navCtrl.push(LoginPage);
  //         console.log(result);
  //  }).catch(err => {
  //         this.mesServ.showAlert('error',err);
  //  });

    
    //this.navCtrl.setRoot(LoginPage,user); 
  }

  goToLogin()
  {
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
