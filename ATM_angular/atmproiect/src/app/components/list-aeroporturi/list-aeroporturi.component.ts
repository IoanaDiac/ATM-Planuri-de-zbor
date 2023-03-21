import {Component, OnInit, ViewChild} from '@angular/core';
import {AeroportService} from '../../services/aeroport.service';
import {Aeroport} from '../../models/aeroport';

@Component({
  selector: 'app-list-aeroporturi',
  templateUrl: './list-aeroporturi.component.html',
  styleUrls: ['./list-aeroporturi.component.css']
})
export class ListAeroporturiComponent implements OnInit {
  page = 0;
  aeroporturi: Aeroport[] = [];
  filters = {
    keyword: '',
    sortBy: 'Nume'
  };

  // tslint:disable-next-line:variable-name
  constructor(private _aeroportService: AeroportService) { }

  ngOnInit(): void {
    this._aeroportService.getAeroporturi().subscribe(
      data => this.aeroporturi = data
    );
  }

  deleteAeroport(id: number) {
    this._aeroportService.deleteAeroport(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listAeroporturi();
      }
    );
  }

  listAeroporturi() {
    this._aeroportService.getAeroporturi().subscribe(
      data => this.aeroporturi = this.filterAeroporturi(data)
    );
  }

  filterAeroporturi(aeroporturi: Aeroport[]) {
    return aeroporturi.filter((e) => {
      return e.nume.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Nume') {
        return a.nume.toLowerCase() < b.nume.toLowerCase() ? -1 : 1;
      }else if (this.filters.sortBy === 'Tara') {
        return a.tara.toLowerCase() < b.tara.toLowerCase() ? -1 : 1 ;
      }
    });
  }



}
