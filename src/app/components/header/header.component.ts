import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { NgIconsModule } from '@ng-icons/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, CommonModule, NgIconsModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  isDarkMode = false;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = document.documentElement.classList.contains('dark-mode');
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }
}
