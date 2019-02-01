import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Events, MenuController } from '@ionic/angular';
import { ParamsService } from '../services/params.service';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.page.html',
  styleUrls: ['./signup3.page.scss'],
})
export class Signup3Page implements OnInit {
  signupInfo = {
    isPremium: false,
    card: '',
    ccNumber: '',
    expiry: '',
    ccv: '',
  };

  constructor(
	public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController,
    public paramsService: ParamsService,
  ) {
  	const step2Info = this.paramsService.getParam();
	  this.signupInfo = {...this.signupInfo, ...step2Info};
  }

  ngOnInit() {
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

  onSetFree() {
    this.signupInfo.isPremium = false;
  }

  onSetPremium() {
    this.signupInfo.isPremium = true;
  }

  onNext() {
    if (this.signupInfo.isPremium && (this.signupInfo.card == '' || this.signupInfo.ccNumber == '' 
      || this.signupInfo.expiry == '' || this.signupInfo.ccv == '')) {
      this.presentToast('The fields can\'t be blank');
      return;
    }

    this.paramsService.setParam(this.signupInfo);
    this.navCtrl.navigateForward('/signup4');
  }

}
