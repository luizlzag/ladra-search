import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable,catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiGitService {

  private baseUrl = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  getRepos(query: string, page: number, perPage: number): Observable<any> {

    if (!query.trim()) {
      return of([]);
    }

    const url = `${this.baseUrl}?q=${query}&page=${page}&per_page=${perPage}`;
    return this.http.get(url).pipe(
      catchError(()=> of([]))
    );
  }
}
