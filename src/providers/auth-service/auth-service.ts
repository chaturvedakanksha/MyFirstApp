//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { User } from '../../app/user';
// import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  myUser= {} as User;
 // isAuthenticated : boolean;
  private fUser: Observable<firebase.User>;

  constructor(public afauth: AngularFireAuth) {
    console.log('Hello AuthServiceProvider Provider');
    this.fUser = afauth.authState;
  //   firebase.auth().onAuthStateChanged(user => {
  //        console.log('firebase user '+ user.email);
  //        if(user)
  //        this.isAuthenticated=true;
  //        else
  //        this.isAuthenticated=false;
  //        console.log("authenticated: "+this.isAuthenticated);
  
  //   })

  //console.log("firebase user "+this.fUser);

     }

  async signin(email,password)
  {
   let result = await this.afauth.auth.signInWithEmailAndPassword(email,password).then(res => {
         console.log('IAS->SignIn successful with user'+res.user.email);
          return 1;
    }).catch(err => {
          console.log('IAS->Error while signin : '+err);
          if(err.code=='auth/invalid-email')
          return 2;
          else if(err.code == 'auth/user-not-found')
          return 3;
          else if(err.code == 'auth/wrong-password')
          return 4;
          else
          return 0;
    });

    return result;
  }


  async signup(email,password){
  let result =  await this.afauth.auth.createUserWithEmailAndPassword(email,password).then( result => {
          console.log("IAS->SignUp successfull with user : "+result.user.email);
          this.emailverification();
          return 1;
    }).catch(error => {
      console.log("IAS->Error generated while signup: "+error);
      var errorCode = error.code;
      //var errorMessage = error.message;
      if (errorCode == 'auth/weak-password')
      return 2;
      else if(error.code == 'auth/email-already-in-use')
      return 3;
      else if(error.code == 'auth/invalid-email')
      return 4;
      else
      return 0;
    });

     return result;
  }

  async emailverification(){
    let user = this.afauth.auth.currentUser;
    let result = await user.sendEmailVerification().then( () =>{
      console.log("IAS->Email Verification sent to "+user.email);
    }).catch(error => {
      console.log("IAS->Error generated while sending email verification: "+error);
    })
  }

  getUID()
  {
        if(this.fUser)
        return this.afauth.auth.currentUser.uid;
        else
        console.log('no user is logged in');
  }

  getCurrentUser()
  {
      if(this.fUser)
      {
          return this.afauth.auth.currentUser;
      }
  }

 async logout()
  {
     let result = await this.afauth.auth.signOut().then( re => {
                  console.log('IAS-> Logged out Successfully ');
                  return 1;
     }).catch(() => {
              console.log('IAS->Error while logging out');
              return 0;
     });
      return result;

  }

}

