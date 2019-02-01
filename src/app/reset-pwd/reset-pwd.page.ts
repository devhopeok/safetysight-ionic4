import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Events, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.page.html',
  styleUrls: ['./reset-pwd.page.scss'],
})
export class ResetPwdPage implements OnInit {

  resetInfo = {
    email: '',
    password: '',
  };

  constructor(
  	public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }
}
// updated
