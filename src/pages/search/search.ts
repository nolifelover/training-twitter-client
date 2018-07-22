import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  apiEndpoint = "http://localhost:3000/api/search"
  tweets = []
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  ngOnInit(){
    
  }

  searchTweets(event:any){
    console.log(event.target.value);
    /*this.http.get(this.apiEndpoint).subscribe((result:any)=>{
      console.log(result);
      if(result.status == 200){
        this.tweets = result.datas
      }
    })*/
  }

}
