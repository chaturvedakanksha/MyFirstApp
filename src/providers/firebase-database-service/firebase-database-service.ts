import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../../app/user';
import { MessageService } from '../message/message';
import { AngularFireAuth, } from '../../../node_modules/angularfire2/auth';
import { AuthService } from '../auth-service/auth-service';
import { UserhomePage } from '../../pages/userhome/userhome';

// import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
@Injectable()
export class FirebaseDatabaseService {

userList : AngularFireList<any[]>;

  constructor(public afDB: AngularFireDatabase,public mesServ:MessageService,public authService: AuthService) {
   // console.log('Hello FirebaseDatabaseServiceProvider Provider');
    
      afDB.list('User').valueChanges().subscribe(users => {
      console.log('user list ->'+users);
         //return this.userList;
       //  let users= this.userList.snapshotChanges();
      //  this.userList.valueChanges().subscribe(users => {
      //       console.log('user list ->'+users);
       });
     
  }
  

 async writeUserData(uid,user) {
   console.log("After database: "+uid);
let result=  await this.afDB.database.ref('Users').child(uid).set({
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

  async readUserData()
  {
        //  this.userList = this.afDB.list('User');
        //  //return this.userList;
        //  let users= this.userList.snapshotChanges();
        //   users.forEach( user => {
        //   user.forEach( userData =>{
        //     let data = userData.payload.val();
        //     let id = userData.payload.val().id;
        //     console.log( "ID: ", id, " Data: " , data );
        //     });
        // });
  }



}
