import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseDatabaseService } from '../../providers/firebase-database-service/firebase-database-service';
import { User } from '../../app/user';
import { AngularFireList } from '../../../node_modules/angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user = {} as User;
  userList : AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,private fireDatabaseService:FirebaseDatabaseService) {
          //this.fireDatabaseService.readUserData().then( list =>{
            //     this.userList =  list;
         // })
   // this.user.email = this.userList.valueChanges().subscribe( hello => {

    //})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
