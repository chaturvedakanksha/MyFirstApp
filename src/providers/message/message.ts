//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController,ToastController } from 'ionic-angular';


@Injectable()
export class MessageService {

  constructor(public alertctrl:AlertController,private toastCtrl: ToastController) {
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

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
