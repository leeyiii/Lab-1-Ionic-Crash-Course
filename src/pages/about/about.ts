import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  author: string;
  now: Date;

  constructor(public navCtrl: NavController) {
    this.author = 'Anndo Ko'; // replace with your name
    this.now = new Date();
  }

}
