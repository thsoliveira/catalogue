import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { SEARCH_ITEMS } from '../../services/graphql'; // Import the search query
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  imports: [CommonModule, RouterModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit {
  query: string | null = null;
  results: any[] = []; // Replace with your actual data type

  constructor(private route: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      this.performSearch(this.query);
    });
  }
  performSearch(query: string | null) {
    if (query) {
      this.apollo.watchQuery<any>({
        query: SEARCH_ITEMS,
        variables: { query }
      }).valueChanges.subscribe(result => {
        this.results = [...result.data.products, ...result.data.categories]; // Merge both results
      });
    } else {
      this.results = [];
    }
  }
}
