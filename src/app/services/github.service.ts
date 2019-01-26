import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepositories() {
    this.http.get("https://api.github.com/users/ruiribeiro97/repos");
  }
}
