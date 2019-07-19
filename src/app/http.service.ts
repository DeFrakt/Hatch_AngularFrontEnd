import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  // addSong(){
  //   //send to service
  //   this._http.addSong(this.songInfo).subscribe(data =>{
  //     console.log(data);
  //   })
}