import { Component } from '@angular/core';
import { GET_CATEGORIES } from '../../services/graphql';
import { map } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Category } from '../../models/category.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categories: Category[] = [];

  constructor(private apollo: Apollo) {
    this.apollo.watchQuery<{ categories: Category[] }>({
      query: GET_CATEGORIES,
    }).valueChanges.pipe(map(result => result.data.categories)).subscribe(data => {
      this.categories = data;
    });
  }
}
