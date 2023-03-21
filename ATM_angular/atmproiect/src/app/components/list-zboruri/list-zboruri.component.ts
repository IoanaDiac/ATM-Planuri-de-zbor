import {Component, OnInit} from '@angular/core';
import {ZborService} from '../../services/zbor.service';
import {Zbor} from '../../models/zbor';

@Component({
  selector: 'app-list-zboruri',
  templateUrl: './list-zboruri.component.html',
  styleUrls: ['./list-zboruri.component.css']
})
export class ListZboruriComponent implements OnInit {

  zboruri: Zbor[] = [];

  filters = {
    keyword: '',
    sortBy: 'Nume'
  };

  // tslint:disable-next-line:variable-name
  constructor(private zborService: ZborService) { }

  ngOnInit(): void {
    this.zborService.getZboruri().subscribe(
      data => this.zboruri = data
    );
  }

  deleteZbor(id: number) {
    this.zborService.deleteZbor(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listZboruri();
      }
    );
  }

  listZboruri() {
    this.zborService.getZboruri().subscribe(
      data => this.zboruri = this.filterZboruri(data)
    );
  }

  filterZboruri(zboruri: Zbor[]) {
    return zboruri.filter((e) => {
      return e.indicativ.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Indicativ') {
        return a.indicativ.toLowerCase() < b.indicativ.toLowerCase() ? -1 : 1;
      }else if (this.filters.sortBy === 'id') {
        return a.id < b.id ? -1 : 1 ;
      }
    });
  }



}
