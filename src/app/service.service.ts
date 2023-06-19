import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data: any;

  constructor(private http:HttpClient) {

   }

  async getArtDataUrl(){
    return this.http.get("https://api.unsplash.com/photos/random/?client_id=k-dR7FBataa3SAyjHzb8cd4Jdn5vC3O2zVeizKwHCgY").toPromise().then((data: any) => {
      return data.urls.full;
    });
  }
}
