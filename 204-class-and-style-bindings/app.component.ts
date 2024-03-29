import { Component } from '@angular/core';

interface Record {
  empName: string;
  units: number;
  totalRevenue: number;
  rank: number;
  region: string;
}

// prettier-ignore
const recordList: Record[] = [
  { empName: 'Cynthia Cunningham', units: 4575.29879815, totalRevenue:  7746739.8278,   rank: 7, region: 'central' },
  { empName: 'Peter Clark',        units: 1030,          totalRevenue:  6448675.309,    rank: 8, region: 'central' },
  { empName: 'Theresa Soto',       units: 8669.89,       totalRevenue: 37439820.3498,   rank: 2, region: 'central' },
  { empName: 'Russell Fisher',     units: 4565.3892,     totalRevenue: 15789230.9843,   rank: 4, region: 'eastern' },
  { empName: 'Elizabeth Hudson',   units: 1589.2979879,  totalRevenue:  9789709.834098, rank: 5, region: 'eastern' },
  { empName: 'Heather Spencer',    units: 9980,          totalRevenue: 29879873.40598,  rank: 3, region: 'eastern' },
  { empName: 'Barbara Tran',       units: 3038.6829,     totalRevenue: 49955398.2987,   rank: 1, region: 'western' },
  { empName: 'Julia Anderson',     units: 3928.593,      totalRevenue:  8678098.979998, rank: 6, region: 'western' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  records = recordList;
  unitsScale = 100 / 10000;
  revenueScale = 100 / 50000000;

  // Avoid computation in templates
  regionClass(r: Record) {
    return 'region-' + r.region;
  }
}
