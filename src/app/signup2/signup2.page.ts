import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Events } from '@ionic/angular';
import { ParamsService } from '../services/params.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {

	signupInfo = {
    companyName: '',
    shortName: '',
  };

  constructor(
  	public navCtrl: NavController,
    public toastCtrl: ToastController, 
    public events: Events,
    public paramsService: ParamsService,
  ) {
	  const step1Info = this.paramsService.getParam();
	  this.signupInfo = {...this.signupInfo, ...step1Info};
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

  onNext() {
    if (this.signupInfo.companyName == '' || this.signupInfo.shortName == '') {
      this.presentToast('The fields can\'t be blank');
      return;
    }

    // this.navCtrl.push(Signup3Page, {signupInfo: this.signupInfo});
    this.paramsService.setParam(this.signupInfo);
    this.navCtrl.navigateForward('/signup3');
  }

}
