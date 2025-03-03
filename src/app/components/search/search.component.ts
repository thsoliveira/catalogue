import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { map, Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, NgIconsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query: string = '';
  isDarkMode$: Observable<boolean>;

  constructor(private router: Router, private themeService: ThemeService) {
    this.isDarkMode$ = this.themeService.theme$.pipe(
      map(theme => theme === 'dark')
    );
  }

  performSearch() {
    if (this.query !== '') {
      this.router.navigate(['/search-results'], { queryParams: { q: this.query } });
    } else {
      this.router.navigate(['/fallback']);
    }
    this.query = '';
  }
}