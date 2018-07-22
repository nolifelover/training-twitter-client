import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TweetModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tweet-modal',
  templateUrl: 'tweet-modal.html',
})
export class TweetModalPage {
  message;
  apiEndpoint = "http://localhost:3000/api/tweets"
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TweetModalPage');
  }

  createTweet(message){
    var body = {
      name: "@nolifelover",
      message: message
    }
    this.http.post(this.apiEndpoint,body).subscribe((result:any)=>{
      console.log(result);
      this.viewCtrl.dismiss()
    })
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

}
