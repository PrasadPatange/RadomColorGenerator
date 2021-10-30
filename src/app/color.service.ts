import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http : HttpClient) { }


  getColor(_model) {
    const url = 'http://colormind.io/api/';
   
    let data;

      data = {
        model: 'default',
        
      };
 
    console.log("For, request", data);

    return this.http.post(url, JSON.stringify(data));
  }
}
