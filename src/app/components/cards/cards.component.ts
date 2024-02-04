import { Component, Input } from '@angular/core';
import { ApiGitService } from '../../services/api-git.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { SearchService } from '../../services/search.service';



@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [HttpClientModule,CommonModule,MatIconModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() repositories: any[] = [];

  data: any[] = [];
  card: any;

  constructor(
    private apiGitService: ApiGitService,
    private searchService: SearchService
    ) { }

  ngOnInit() {
    this.searchService.currentSearchQuery.subscribe((query: string) => {
      this.search(query);
    });
  }

  search(query: string) {
    this.apiGitService.getRepos(query).subscribe((data: any) => {
      this.data = data.items;
    });
  }


  
}
