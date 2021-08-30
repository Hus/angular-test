import { Component } from '@angular/core';
import { ZipService } from './zip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  zipcodes : any[] = [];
  constructor(private zipService: ZipService, private router: Router) {
    this.zipcodes = [
      '90210',
      '94027',
      '96815',
      '94016',
      '95035',
      '93650'
    ]
  }
  getDetail(zipCode) {    
    this.router.navigateByUrl('/map');
  }

}
