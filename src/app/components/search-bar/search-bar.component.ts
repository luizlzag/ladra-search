import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatIconModule,FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})

export class SearchBarComponent {
  constructor(private searchService: SearchService) { }

  search(query: string) {
    this.searchService.updateSearchQuery(query);
  }

  onInputChange(query: string): void {
    this.searchService.updateSearchQuery(query);
  }
}
