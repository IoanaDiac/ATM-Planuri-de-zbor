import { Component, OnInit } from '@angular/core';
import {Aeroport} from '../../models/aeroport';
import {AeroportService} from '../../services/aeroport.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-aeroport',
  templateUrl: './add-aeroport.component.html',
  styleUrls: ['./add-aeroport.component.css']
})
export class AddAeroportComponent implements OnInit {

  aeroport: Aeroport = new Aeroport();
  constructor(private aeroportService: AeroportService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.aeroportService.getAeroport(id).subscribe(
        data => this.aeroport = data
      );
    }
  }

  saveAeroport(){
    this.aeroportService.saveAeroport(this.aeroport).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl('/aeroporturi');
      }
    );
  }

  deleteAeroport(id: number){
    this.aeroportService.deleteAeroport(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.router.navigateByUrl('/aeroporturi');
      }
    );
  }
}
