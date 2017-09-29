import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  private apiKey = "?api_key=4346f373185618d64e0bc4d856a5ece8";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getFilmesMaisRecentes(){
    return this.http.get(this.baseApiPath + "/movie/popular"+this.apiKey);
  }

}
