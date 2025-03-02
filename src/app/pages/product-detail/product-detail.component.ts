import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable, map, interval, startWith } from 'rxjs';
import { Product } from '../../models/product.model';
import { GET_PRODUCT } from '../../services/graphql';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: Product | null = null;
  countdown$: Observable<string>;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.apollo.watchQuery<{ product: Product }>({
        query: GET_PRODUCT,
        variables: { where: { slug: params['slug'] } }
      }).valueChanges.pipe(map(result => result.data.product)).subscribe(data => {
        this.product = data;
      });
    });

    this.countdown$ = interval(1000).pipe(
      startWith(0),
      map(() => this.calculateCountdown())
    );
  }

  private calculateCountdown(): string {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diff = Math.floor((midnight.getTime() - now.getTime()) / 1000);
    return `${Math.floor(diff / 3600)}h ${Math.floor((diff % 3600) / 60)}m ${diff % 60}s`;
  }

  getRelatedProducts(): Product[] {
    if (!this.product || !this.product.category) {
      return [];
    }
    return this.product.category.products.filter(product => product.slug !== this.product?.slug);
  }
}
