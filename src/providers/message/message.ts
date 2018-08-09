//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class MessageService {

  constructor(public alertctrl:AlertController) {
    console.log('Hello MessageProvider Provider');
  }

  showAlert(mes1,mes2) {
    const alert = this.alertctrl.create({
      title: mes1,
      subTitle: mes2,
      buttons: ['OK']
    });
    alert.present();
  }

}
