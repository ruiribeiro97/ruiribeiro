import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubRepository } from '../components/projects/github/github.component';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<any> {
    return this.http.get("https://api.github.com/users/ruiribeiro97/repos");
  }
}
