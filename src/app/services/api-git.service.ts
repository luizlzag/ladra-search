import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGitService {

  API_URL = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  public getRepos(query: string) {
    return this.http.get(`${this.API_URL}/search/repositories?q=${query}`);
  }
}
