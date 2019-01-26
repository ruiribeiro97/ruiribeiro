import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitbucketService {

  constructor(private http: HttpClient) { }

  getRepositories() {
    return this.http.get('https://api.bitbucket.org/2.0/repositories/1150344')
  }
}
