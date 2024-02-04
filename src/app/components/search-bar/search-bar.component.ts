import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SearchService } from '../../services/search.service';
import { FilterComponent } from "../filter/filter.component";


@Component({
    selector: 'app-search-bar',
    standalone: true,
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css',
    imports: [MatIconModule, FormsModule, FilterComponent]
})

export class SearchBarComponent {
  currentFilter: string = 'Code';

  constructor(private searchService: SearchService) { }

  search(query: string) {
    this.searchService.updateSearchQuery(query);
  }

  onInputChange(query: string): void {
    this.searchService.updateSearchQuery(query);
  }

  onFilterChange(filter: string): void {
    this.currentFilter = filter;
    this.searchService.updateFilterCategory(filter);
    
  }
}
