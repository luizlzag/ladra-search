import { Component, Input } from '@angular/core';
import { ApiGitService } from '../../services/api-git.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { SearchService } from '../../services/search.service';
import { PaginationComponent } from "../pagination/pagination.component";


@Component({
    selector: 'app-cards',
    standalone: true,
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.css',
    imports: [HttpClientModule, CommonModule, MatIconModule, PaginationComponent],
    
})
export class CardsComponent {
  animationState = 'initial';
  FilterCategory!: string;

  toggleHoverAnimation() {
    this.animationState = (this.animationState === 'initial' ? 'hovered' : 'initial');
  }


  @Input() repositories: any[] = [];

  data: any[] = [];
  card: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(
    private apiGitService: ApiGitService,
    private searchService: SearchService
    ) { }

  ngOnInit() {
    this.searchService.currentSearchQuery.subscribe((query: string) => {
      this.search(query);
    });
    this.searchService.currentFilterCategory.subscribe((category: string) => {
      this.FilterCategory = category;
    });
  }
    search(query: string) {
      this.currentPage = 1; // Reinicia a página ao realizar uma nova pesquisa
      this.loadData(query);
    }

    loadData(query: string) {
      this.apiGitService.getRepos(query, this.FilterCategory, this.currentPage, this.itemsPerPage)
        .subscribe((data: any) => {
          this.data = data.items;
          this.totalItems = data.total_count;
          this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        });
    }

    onPageChange(newPage: number) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.currentPage = newPage;
        this.searchService.currentSearchQuery.subscribe((query: string) => {
          this.loadData(query);
        });
      }
    }
  }

