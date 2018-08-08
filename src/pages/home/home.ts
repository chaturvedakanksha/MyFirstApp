import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  srcimg : string;
  constructor(public navCtrl: NavController) {

  }

  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    this.srcimg="https://www.brandcrowd.com/gallery/brands/pictures/picture13626523044082.jpg";
  }

}
