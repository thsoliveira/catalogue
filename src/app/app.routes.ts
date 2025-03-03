import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'search-results',
        loadComponent: () => import('./pages/search-results/search-results.component')
            .then(m => m.SearchResultsComponent)
    },
    {
        path: 'fallback',
        loadComponent: () => import('./pages/fallback/fallback.component')
            .then(m => m.FallbackComponent)
    },
    {
        path: 'category/:slug',
        loadComponent: () => import('./pages/category/category.component')
            .then(m => m.CategoryComponent)
    },
    {
        path: 'product/:slug',
        loadComponent: () => import('./pages/product-detail/product-detail.component')
            .then(m => m.ProductDetailComponent)
    }
];
