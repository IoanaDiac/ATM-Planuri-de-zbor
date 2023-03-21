import { Component, OnInit } from '@angular/core';
import {PlanZbor} from '../../models/planZbor';
import {PlanZborService} from '../../services/plan-zbor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Zbor} from '../../models/zbor';
import {ZborService} from '../../services/zbor.service';
import {SegmentRuta} from '../../models/segmentRuta';
import {SegmentRutaService} from '../../services/segment-ruta.service';

@Component({
  selector: 'app-add-plan-zbor',
  templateUrl: './add-plan-zbor.component.html',
  styleUrls: ['./add-plan-zbor.component.css']
})
export class AddPlanZborComponent implements OnInit {

  segmenteRuta: SegmentRuta[] = [];
  segmentRuta: SegmentRuta = new SegmentRuta();
  zboruri: Zbor[] = [];
  zbor: Zbor = new Zbor();
  planZbor: PlanZbor = new PlanZbor();

  constructor(private planZborService: PlanZborService,
              private zborService: ZborService,
              private segmentRutaService: SegmentRutaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.zborService.getZboruri().subscribe(
      data => this.zboruri = data
    );
    this.segmentRutaService.getSegmenteRuta().subscribe(
      data => this.segmenteRuta = data
    );
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.planZborService.getPlanZbor(id).subscribe(
        data => this.planZbor = data
      );
    }
  }

  savePlanZbor(){
    this.planZborService.savePlanZbor(this.planZbor).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl('/planurizbor');
      }
    );
  }

  deletePlanZbor(id: number){
    this.planZborService.deletePlanZbor(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.router.navigateByUrl('/planurizbor');
      }
    );
  }
}
