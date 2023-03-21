import {Component, OnInit} from '@angular/core';
import {PlanZbor} from '../../models/planZbor';
import {PlanZborService} from '../../services/plan-zbor.service';

@Component({
  selector: 'app-list-planuri-zbor',
  templateUrl: './list-planuri-zbor.component.html',
  styleUrls: ['./list-planuri-zbor.component.css']
})
export class ListPlanuriZborComponent implements OnInit {

  planuriZbor: PlanZbor[] = [];

  filters = {
    keyword: '',
    sortBy: 'Nume'
  };

  // tslint:disable-next-line:variable-name
  constructor(private planZborService: PlanZborService) { }

  ngOnInit(): void {
    this.planZborService.getPlanuriZbor().subscribe(
      data => this.planuriZbor = data
    );
  }

  deletePlanuriZbor(id: number) {
    this.planZborService.deletePlanZbor(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listPlanuriZbor();
      }
    );
  }

  listPlanuriZbor() {
    this.planZborService.getPlanuriZbor().subscribe(
      data => this.planuriZbor = this.filterPlanuriZbor(data)
    );
  }

  filterPlanuriZbor(planuriZbor: PlanZbor[]) {
    return planuriZbor.filter((e) => {
      return e.zbor.toString().includes(this.filters.keyword.toString());
    }).sort((a, b) => {
      if (this.filters.sortBy === 'ID') {
        return a.id < b.id ? -1 : 1;
      }
    });
  }
}
