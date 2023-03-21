import { Component, OnInit } from '@angular/core';
import {Zbor} from '../../models/zbor';
import {ZborService} from '../../services/zbor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Aeroport} from '../../models/aeroport';
import {AeroportService} from '../../services/aeroport.service';

@Component({
  selector: 'app-add-zbor',
  templateUrl: './add-zbor.component.html',
  styleUrls: ['./add-zbor.component.css']
})
export class AddZborComponent implements OnInit {

  aeroporturi: Aeroport[] = [];
  aeroport: Aeroport = new Aeroport();
  zbor: Zbor = new Zbor();

  constructor(private zborService: ZborService,
              private aeroportService: AeroportService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aeroportService.getAeroporturi().subscribe(
      data => this.aeroporturi = data
    );
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.zborService.getZbor(id).subscribe(
        data => this.zbor = data
      );
    }
  }

  saveZbor(){
    this.zborService.saveZbor(this.zbor).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl('/zboruri');
      }
    );
  }

  deleteZbor(id: number){
    this.zborService.deleteZbor(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.router.navigateByUrl('/zboruri');
      }
    );
  }
}
