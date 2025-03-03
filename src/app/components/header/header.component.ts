import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { NgIconsModule } from '@ng-icons/core';
import { SearchComponent } from '../search/search.component';
import { map } from 'rxjs/operators';
import type { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, CommonModule, NgIconsModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  isDarkMode$: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isDarkMode$ = this.themeService.theme$.pipe(
      map(theme => theme === 'dark')
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
