import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SingletonProvider } from '../../providers/singleton/singleton';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  apiEndpoint = "http://localhost:3000/api/tweets"
  tweets = []
  constructor(public navCtrl: NavController, private http: HttpClient, private singletonProvider: SingletonProvider) {
    singletonProvider.userTweet.subscribe(()=>{
      console.log("user new tweets")
      this.getTweets();
    })
  }

  ngOnInit(){
    this.getTweets();
  }

  getTweets(event=null){
    this.http.get(this.apiEndpoint).subscribe((result:any)=>{
      console.log(result);
      if(result.status == 200){
        this.tweets = result.datas
        if(event){
          event.complete();
        }
      }
    })
  }

}
