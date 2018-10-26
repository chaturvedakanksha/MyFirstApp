import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { FirebaseDatabaseService } from '../../providers/firebase-database-service/firebase-database-service';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-userhome',
  templateUrl: 'userhome.html',
})

export class UserhomePage {
name : any;
  constructor(public viewCtrl: ViewController,public popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams,public authServ:AuthService,public afDB:FirebaseDatabaseService) {
       this.afDB.afDB.database.ref('my-first-app-9c4f0').child(this.authServ.getUID()).once('value').then(snap => {
                     this.name = snap.child('username').val();
        })
  }

  ionViewDidLoad() {
  //  let user = this.dbauth.afDB.database.ref().once('value').then( snapshot => {
  //     this.name = snapshot.child("Users").child(this.afauth.auth.currentUser.uid).child('Username');
  //  });
   console.log('ionViewDidLoad UserhomePage');
  }
 


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }


 

}
