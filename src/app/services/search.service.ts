import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery = new BehaviorSubject<string>('');
  private filterCategory = new BehaviorSubject<string>('Code');

  currentSearchQuery = this.searchQuery.asObservable();
  currentFilterCategory = this.filterCategory.asObservable();

  updateSearchQuery(query: string): void {
    this.searchQuery.next(query);
  }

  updateFilterCategory(category: string): void {
    this.filterCategory.next(category);
  }
}
