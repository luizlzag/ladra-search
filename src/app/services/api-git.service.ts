import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGitService {

  private baseUrl = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  getRepos(query: string, page: number, perPage: number): Observable<any> {
    const url = `${this.baseUrl}?q=${query}&page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }
}
