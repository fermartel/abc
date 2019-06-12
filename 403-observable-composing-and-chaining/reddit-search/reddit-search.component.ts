import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  retry,
  startWith,
  switchMap
} from 'rxjs/operators';

import { RedditImageSearchService } from './reddit-image-search.service';

@Component({
  selector: 'reddit-search',
  templateUrl: './reddit-search.component.html',
  styleUrls: ['./reddit-search.component.css']
})
export class RedditSearchComponent {
  subReddits = [
    'aww',
    'wholesomememes',
    'mildlyinteresting',
    'awesome'
  ];
  subReddit = new FormControl(this.subReddits[0]);
  search = new FormControl('');
  results: Observable<string[]>;

  constructor(ris: RedditImageSearchService) {
    const validSubReddit = this.subReddit.valueChanges.pipe(
      startWith<string>(this.subReddit.value),
      distinctUntilChanged()
    );

    const validSearch = this.search.valueChanges.pipe(
      startWith<string>(this.search.value),
      map(search => search.trim()),
      distinctUntilChanged(),
      filter(search => search !== '')
    );

    const combinedCriteria = combineLatest(
      validSubReddit,
      validSearch
    ).pipe(map(([subReddit, search]) => ({ subReddit, search })));

    this.results = combinedCriteria.pipe(
      debounceTime(500),
      switchMap(val =>
        ris.search(val.subReddit, val.search).pipe(
          retry(3),
          // Clear previous entries while waiting
          startWith([])
        )
      )
    );
  }
}
