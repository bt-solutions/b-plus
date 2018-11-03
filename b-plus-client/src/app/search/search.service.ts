import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})


export class SearchService {

baseUrl: string = 'http://dev2.unifacef.com.br:8000/api/exemplarTitulo/';
data: any;

constructor(private _http: HttpClient){ }


search(queryString: string) {
      queryString = queryString.replace(' ', '%');
      if(queryString == ""){
        return new EmptyObservable();
      }
      let _URL = this.baseUrl + queryString;
      const options = {
        Headers: new HttpHeaders().append('content-type', 'application/json').append("Access-Control-Allow-Methods", "GET"),
        withCredentials: false
      }
      console.log(_URL)
      return this._http.get(_URL, options);
  }

  save(str : string){
    this.data = str;
    console.log(str);
  }
}
