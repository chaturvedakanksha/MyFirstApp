import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../app/user';
import { MessageService } from '../message/message';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { AuthService } from '../auth-service/auth-service';

@Injectable()
export class FirebaseDatabaseService {

  constructor(public afDB: AngularFireDatabase,public mesServ:MessageService,public authService: AuthService) {
    console.log('Hello FirebaseDatabaseServiceProvider Provider');
  }
  // createPerson(firstName: string): void {((
  //   const personRef: firebase.database.Reference = this.afDB.database.ref().child('Users').child(this.authService.getCurrentUser().uid);
  //   personRef.set({
  //     firstName,
  //   })
  // }

 async writeUserData(uid,user) {
let result=  await this.afDB.database.ref().child('Users').child(uid).set({
      phone: user.phoneno,
      email: user.email,
      password : user.password,
      username: user.username
    }).then( () =>{
          console.log('IDBS->Written in Database Successful');
          //this.mesServ.showAlert("Congratulations","You are registed successfully");
          return 1;
    }).catch(err =>{
          //this.mesServ.showAlert('error',err);
          console.log('IDBS->Error while writing in Database');
        return 0;
        });
        return result;

  }



}
