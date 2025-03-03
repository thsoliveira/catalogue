import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly themeKey = 'theme';
    private renderer: Renderer2;
    private themeSubject = new BehaviorSubject<'light' | 'dark'>(this.getSavedTheme());
    theme$ = this.themeSubject.asObservable();  

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this.applyTheme(this.themeSubject.value);
    }

    toggleTheme(): void {
        const newTheme = this.themeSubject.value === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setTheme(theme: 'light' | 'dark'): void {
        this.themeSubject.next(theme);
        this.applyTheme(theme);
        localStorage.setItem(this.themeKey, theme);
    }

    private getSavedTheme(): 'light' | 'dark' {
        return (localStorage.getItem(this.themeKey) as 'light' | 'dark') || 'light';
    }

    private applyTheme(theme: 'light' | 'dark'): void {
        if (theme === 'dark') {
            this.renderer.addClass(document.documentElement, 'dark-mode');
        } else {
            this.renderer.removeClass(document.documentElement, 'dark-mode');
        }
    }
}
