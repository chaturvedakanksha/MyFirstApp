import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserhomePage } from '../userhome/userhome';
import { User } from '../../app/user';
import { MessageService } from '../../providers/message/message'
import { AuthService } from '../../providers/auth-service/auth-service';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mesServ: MessageService,public authService:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 /* push(){
    this.navCtrl.push(LoginPage);
  }*/
  pop()
  {
    this.navCtrl.setRoot(HomePage);
  }

  login(user: User){

      this.authService.signin(user.email,user.password).then(result1 => {
        if(result1 == 1)
        {
          if(this.authService.getCurrentUser().emailVerified)
          this.navCtrl.setRoot(UserhomePage);
          else{
          this.mesServ.showAlert('Email not Verified','Please verify your email first');
          this.authService.emailverification();
          }
        }
        else 
        {
            if(result1 == 2)
            this.mesServ.presentToast('Invalid Email address');
            else if(result1 == 3)
            this.mesServ.presentToast('User not found');
            else if(result1 == 4)
            this.mesServ.presentToast('Wrong Credentials');
            else
            this.mesServ.presentToast('Somthing went wrong');
        }        
      });


  }

 /* login(user: User){
   let recuser = {} as User;
   recuser=this.navParams.data;
  // console.log(recuser);
   if(recuser.username && recuser.password)
   {
   if(recuser.username == user.username && recuser.password == user.password ) 
   this.navCtrl.setRoot(UserhomePage);
   else
   this.mesServ.showAlert('OOPS!!','Wrong Credentials');
  }
  else
  {
    this.mesServ.showAlert('Sorry!','No User with this username is created');
  }
}*/

}
