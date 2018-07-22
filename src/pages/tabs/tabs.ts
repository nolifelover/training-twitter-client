import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { ModalController } from '../../../node_modules/ionic-angular/umd';
import { TweetModalPage } from '../tweet-modal/tweet-modal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabSearch = SearchPage;
  tabAbout = AboutPage;

  tweetModal;
  constructor(private modalCtrl: ModalController) {
    this.tweetModal = this.modalCtrl.create(TweetModalPage)
  }

  showTweetModal(){
    this.tweetModal.present()
  }


}
