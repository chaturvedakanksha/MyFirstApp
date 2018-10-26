import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import {MessageService} from '../../providers/message/message';
import { LoginPage } from '../login/login';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import { FirebaseDatabaseService } from '../../providers/firebase-database-service/firebase-database-service';
import { AuthService } from '../../providers/auth-service/auth-service';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

user = {} as User;
//signupItemRef$: FirebaseListObservable<any[]>;
  constructor(public authservice: AuthService, public navCtrl: NavController, public navParams: NavParams, public mesServ:MessageService,private dbserv:FirebaseDatabaseService, public afDB: AngularFireDatabase) {
    //this.signupItemRef$ = this.afDB.list('Users');
  }

  signUp(user : User)
  {

   // this.mesServ.showAlert('gg',user.username+user.phoneno+user.password+user.email);
    // this.signupItemRef$.push({
    //   userName: user.username,
    //   userPhoneNo: user.phoneno,
    //   userPass: user.password,
    //   userMail: user.email
    // });
    
    this.authservice.signup(user.email,user.password).then(result1 =>{
      //console.log("my signed Up: "+result);
      if(result1 == 1)
      {
          //this.mesServ.showAlert('gg',user.username+user.phoneno+user.password+user.email);
         this.dbserv.writeUserData(this.authservice.getUID(),user).then(result => {
        if(result==1)        
       { 
         this.navCtrl.push(LoginPage);
         this.mesServ.showAlert('Congrats!','You are registered successfully, please verify your account by clicking on the link sent on your email.'); 
         this.user.email='';
         this.user.password='';
         this.user.phoneno='';
         this.user.username='';
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

  
  }

  goToLogin()
  {
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
