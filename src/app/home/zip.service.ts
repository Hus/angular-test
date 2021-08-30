import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipService {
  private zipUrl: string = 'https://api.zippopotam.us/us/';
  
  constructor(private httpClient: HttpClient) { }

  getZipInfo(zip) : Observable<any>{
    return this.httpClient.get(this.zipUrl + '/' + zip);
  }

}
