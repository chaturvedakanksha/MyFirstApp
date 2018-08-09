import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import {MessageService} from '../../providers/message/message';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mesServ:MessageService) {
  }

  signUp(user : User)
  {
     this.mesServ.showAlert('User Details','Username: '+user.username+'<br>Password: '+user.password+'<br>Phone Number: '+user.phoneno+'<br>Email: '+user.email+'.');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
