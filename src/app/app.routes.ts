import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoryComponent } from './pages/category/category.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FallbackComponent } from './pages/fallback/fallback.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'search-results', component: SearchResultsComponent },
{ path: 'fallback', component: FallbackComponent },
{ path: 'category/:slug', component: CategoryComponent },
{ path: 'product/:slug', component: ProductDetailComponent }];
