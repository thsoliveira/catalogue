import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, NgIconsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query: string = '';

  constructor(private router: Router) { }

  performSearch() {
    if (this.query !== '') {
      this.router.navigate(['/search-results'], { queryParams: { q: this.query } });
    } else {
      this.router.navigate(['/fallback']);
    }
  }
}