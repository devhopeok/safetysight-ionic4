import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Events, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginInfo = {
    email: '',
    password: '',
  }

  constructor(
  	public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
  	this.menuCtrl.enable(false);
  }

  goHome() {
    if (this.loginInfo.email == '' || this.loginInfo.password == '') {
      this.presentToast('The email address and password can\'t be blank');
      return;
    }

    if (this.loginInfo.email != 'test' || this.loginInfo.password != 'test') {
      this.presentToast('The email or password is incorrect.');
      return;
    }
    
    localStorage.setItem('loginInfo', JSON.stringify(this.loginInfo));
    localStorage.setItem('lastLoggedIn', new Date().toString());
    this.navCtrl.navigateRoot('/tabs');
  }

  async presentToast(message) {
    let toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color: 'danger',
      position: 'bottom',
    });


    toast.dismiss(() => {

    });
  
    toast.present();
  }

  gotoResetPwd() {
    this.navCtrl.navigateForward('/reset-pwd');
  }

  gotoSignup() {
    this.navCtrl.navigateForward('/signup1');
  }

}
// updated