import {Component, OnInit} from '@angular/core';
import {PunctNav} from '../../models/punctNav';
import {PunctNavService} from '../../services/punct-nav.service';

@Component({
  selector: 'app-list-puncte-nav',
  templateUrl: './list-puncte-nav.component.html',
  styleUrls: ['./list-puncte-nav.component.css']
})
export class ListPuncteNavComponent implements OnInit {

  puncteNav: PunctNav[] = [];

  filters = {
    keyword: '',
    sortBy: 'Nume'
  };

  // tslint:disable-next-line:variable-name
  constructor(private punctNavService: PunctNavService) { }

  ngOnInit(): void {
    this.punctNavService.getPuncteNav().subscribe(
      data => this.puncteNav = data
    );
  }

  deletePuncteNav(id: number) {
    this.punctNavService.deletePunctNav(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listPuncteNav();
      }
    );
  }

  listPuncteNav() {
    this.punctNavService.getPuncteNav().subscribe(
      data => this.puncteNav = this.filterPuncteNav(data)
    );
  }

  filterPuncteNav(puncteNav: PunctNav[]) {
    return puncteNav.filter((e) => {
      return e.indicatif.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Indicativ') {
        return a.indicatif.toLowerCase() < b.indicatif.toLowerCase() ? -1 : 1;
      }else if (this.filters.sortBy === 'Latitudine') {
        return a.latitudine < b.latitudine ? -1 : 1 ;
      }else if (this.filters.sortBy === 'Longitudine') {
        return a.longitudine < b.longitudine ? -1 : 1 ;
      }
    });
  }
}
