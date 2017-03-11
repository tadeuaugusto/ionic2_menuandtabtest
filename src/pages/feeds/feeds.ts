import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FeedAudioPage } from '../feed-audio/feed-audio';
import { FeedTextoPage } from '../feed-texto/feed-texto';

/*
  Generated class for the Feeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html'
})
export class FeedsPage {

    tab1Root: any = FeedAudioPage;
    tab2Root: any = FeedTextoPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsPage');
  }

}
