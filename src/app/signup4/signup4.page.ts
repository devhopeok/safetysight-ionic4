import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Events, NavParams, ModalController } from '@ionic/angular';
import { ParamsService } from '../services/params.service';

@Component({
  selector: 'app-signup4',
  templateUrl: './signup4.page.html',
  styleUrls: ['./signup4.page.scss'],
})
export class Signup4Page implements OnInit {

	signupInfo = {
    users: [],
  }

  constructor(
  	public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public modalCtrl: ModalController,
    public paramsService: ParamsService,
  ) { }

  ngOnInit() {
  	const step3Info = this.paramsService.getParam();
	  this.signupInfo = {...this.signupInfo, ...step3Info};
  }

  async presentToast(message) {
    let toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
  
    toast.dismiss(() => {

    });
  
    toast.present();
  }

  onNext() {
    // this.navCtrl.push(Signup5Page, {signupInfo: this.signupInfo});
  }

  onAddUser() {
    // const modal = this.modalCtrl.create(EditUserPage);
    // modal.onDidDismiss(data => {
    //   if (data) {
    //     this.signupInfo.users.push(data);
    //   }
    // });
    // modal.present();
  }

  onEditUser(index) {
    // const modal = this.modalCtrl.create(EditUserPage, {userInfo: this.signupInfo.users[index]});
    // modal.onDidDismiss(data => {
    //   if (data) {
    //     this.signupInfo.users[index] = data;
    //   }
    // });
    // modal.present();
  } 

}
