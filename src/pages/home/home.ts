import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  apiEndpoint = "http://localhost:3000/api/tweets"
  tweets = []
  constructor(public navCtrl: NavController, private http: HttpClient) {
  
  }

  ngOnInit(){
    this.getTweets();
  }

  getTweets(){
    this.http.get(this.apiEndpoint).subscribe((result:any)=>{
      console.log(result);
      if(result.status == 200){
        this.tweets = result.datas
      }
    })
  }

}
