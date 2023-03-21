import {Component, OnInit} from '@angular/core';
import {SegmentRuta} from '../../models/segmentRuta';
import {SegmentRutaService} from '../../services/segment-ruta.service';
import {PunctNav} from "../../models/punctNav";

@Component({
  selector: 'app-list-segmente-ruta',
  templateUrl: './list-segmente-ruta.component.html',
  styleUrls: ['./list-segmente-ruta.component.css']
})
export class ListSegmenteRutaComponent implements OnInit {

  segmenteRuta: SegmentRuta[] = [];

  filters = {
    keyword: '',
    sortBy: 'Nume'
  };

  // tslint:disable-next-line:variable-name
  constructor(private segmentRutaService: SegmentRutaService) { }

  ngOnInit(): void {
    this.segmentRutaService.getSegmenteRuta().subscribe(
      data => this.segmenteRuta = data
    );
  }

  deleteSegmenteRuta(id: number) {
    this.segmentRutaService.deleteSegmentRuta(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listSegmenteRuta();
      }
    );
  }

  listSegmenteRuta() {
    this.segmentRutaService.getSegmenteRuta().subscribe(
      data => this.segmenteRuta = this.filterSegmenteRuta(data)
    );
  }

  filterSegmenteRuta(segmenteRuta: SegmentRuta[]) {
    return segmenteRuta.filter((e) => {
      return e.indicativ.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a, b) => {
      if (this.filters.sortBy === 'Indicativ') {
        return a.indicativ.toLowerCase() < b.indicativ.toLowerCase() ? -1 : 1;
      }else if (this.filters.sortBy === 'Distanta') {
        return a.distanta < b.distanta ? -1 : 1 ;
      }
    });
  }
}

