import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  srcimg : string;
  constructor(public navCtrl: NavController) {

  }

  gotoLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
  gotoSignUp(){
    this.navCtrl.setRoot(SignupPage);
  }

  ionViewDidLoad() {
    this.srcimg="https://www.brandcrowd.com/gallery/brands/pictures/picture13626523044082.jpg";
  }

}
