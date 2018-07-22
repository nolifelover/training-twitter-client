import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the SingletonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SingletonProvider {
  userTweet:Subject<any> = new Subject();
  constructor(public http: HttpClient) {
    console.log('Hello SingletonProvider Provider');
  }

}
