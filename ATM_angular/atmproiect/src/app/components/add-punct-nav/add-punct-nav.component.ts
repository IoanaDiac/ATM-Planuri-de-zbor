import { Component, OnInit } from '@angular/core';
import {} from '../../models/punctNav';
import {PunctNavService} from '../../services/punct-nav.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PunctNav} from '../../models/punctNav';

@Component({
  selector: 'app-add-punct-nav',
  templateUrl: './add-punct-nav.component.html',
  styleUrls: ['./add-punct-nav.component.css']
})
export class AddPunctNavComponent implements OnInit {

  punctNav: PunctNav = new PunctNav();
  constructor(private punctNavService: PunctNavService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.punctNavService.getPunctNav(id).subscribe(
        data => this.punctNav = data
      );
    }
  }

  savepunctNav(){
    this.punctNavService.savePunctNav(this.punctNav).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl('/punctenav');
      }
    );
  }

  deletePunctNav(id: number){
    this.punctNavService.deletePunctNav(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.router.navigateByUrl('/punctenav');
      }
    );
  }
}
