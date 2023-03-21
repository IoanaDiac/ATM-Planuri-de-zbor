import { Component, OnInit } from '@angular/core';
import {SegmentRuta} from '../../models/segmentRuta';
import {SegmentRutaService} from '../../services/segment-ruta.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PunctNav} from '../../models/punctNav';
import {PunctNavService} from '../../services/punct-nav.service';

@Component({
  selector: 'app-add-segment-ruta',
  templateUrl: './add-segment-ruta.component.html',
  styleUrls: ['./add-segment-ruta.component.css']
})
export class AddSegmentRutaComponent implements OnInit {

  puncteNav: PunctNav[] = [];
  punctNav: PunctNav = new PunctNav();
  segmentRuta: SegmentRuta = new SegmentRuta();

  constructor(private segmentRutaService: SegmentRutaService,
              private punctNavService: PunctNavService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.punctNavService.getPuncteNav().subscribe(
      data => this.puncteNav = data
    );
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.segmentRutaService.getSegmentRuta(id).subscribe(
        data => this.segmentRuta = data
      );
    }
  }

  saveSegmentRuta(){
    this.segmentRutaService.saveSegmentRuta(this.segmentRuta).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl('/segmenteruta');
      }
    );
  }

  deleteSegmentRuta(id: number){
    this.segmentRutaService.deleteSegmentRuta(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.router.navigateByUrl('/segmenteruta');
      }
    );
  }
}
