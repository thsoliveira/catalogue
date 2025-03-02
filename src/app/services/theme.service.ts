import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly themeKey = 'theme';

    constructor() {
        this.loadTheme();
    }

    toggleTheme(): void {
        const currentTheme = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
        this.setTheme(currentTheme);
    }

    setTheme(theme: 'light' | 'dark'): void {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
        localStorage.setItem(this.themeKey, theme);
    }

    private loadTheme(): void {
        const savedTheme = localStorage.getItem(this.themeKey) || 'light';
        this.setTheme(savedTheme as 'light' | 'dark');
    }
}
