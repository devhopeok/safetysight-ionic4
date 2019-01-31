import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.page.html',
  styleUrls: ['./templates.page.scss'],
})
export class TemplatesPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  onEditTemplate() {
    this.navCtrl.navigateForward('/edit-template');
  }

  logOut() {
    localStorage.removeItem('loginInfo');
    localStorage.removeItem('lastLoggedIn');
    this.navCtrl.navigateRoot('/login');
  }

  onShowGrid() {
    this.navCtrl.navigateForward('/show-grid');
  }

}
