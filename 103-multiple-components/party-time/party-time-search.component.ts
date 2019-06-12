import { Component } from '@angular/core';

@Component({
  selector: 'party-time-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Party Time</span>
        <div>Search for Party Times</div>
        <search-box></search-box>
      </div>
    </div>
  `
})
export class PartyTimeSearchComponent {}
