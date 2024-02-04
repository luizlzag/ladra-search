import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  filterOptions: string[]=[
    'code',
    'repositories',
    'issues',
    'Pull Requests',
    'Discussions',
    'Users',
    'Commits',
    'Packages',
    'Wikis',
    'Topics',
    'Marketplace'
  ];
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();

  handleFilterChange(event: Event): void {
    const selectedOption = (event.target as HTMLSelectElement)?.value;
    if (selectedOption !== undefined && selectedOption !== null) {
      this.setFilter(selectedOption);
    }
  }

  private setFilter(value: string): void {
    this.filterChange.emit(value);
  }

}
