import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Events, MenuController } from '@ionic/angular';
import { ParamsService } from '../services/params.service';
 
@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {
  signupInfo = {
    firstName: 'Test',
    surname: 'Test2',
    email: 'abc@test.com',
  };

  constructor(
  	public navCtrl: NavController,
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController,
    public paramsService: ParamsService,
  ) { }

  ngOnInit() {
  }

  async presentToast(message) {
    let toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color: 'danger',
      position: 'bottom'
    });
  
    toast.dismiss(() => {

    });
  
    toast.present();
  }

  onNext() {
    if (this.signupInfo.email == '' || this.signupInfo.firstName == '' || this.signupInfo.surname == '') {
      this.presentToast('The fields can\'t be blank');
      return;
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.signupInfo.email.toLowerCase())) {
      this.presentToast('Please enter the valid email address.');
      return;
    }

		this.paramsService.setParam(this.signupInfo);
    this.navCtrl.navigateForward('/signup2');
  }

}
