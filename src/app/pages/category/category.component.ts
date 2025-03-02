import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';
import { Category } from '../../models/category.model';
import { GET_PRODUCTS } from '../../services/graphql';

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  category: Category | null = null;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.apollo.watchQuery<{ category: Category }>({
        query: GET_PRODUCTS,
        variables: { where: { slug: params['slug'] } }
      }).valueChanges.pipe(map(result => result.data.category)).subscribe(data => {
        this.category = data;
      });
    });
  }
}
