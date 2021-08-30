import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ZipService } from '../zip.service';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild('map') mapElement: any;
  map;
  detail$: Observable<any>;
  selectedZip: string;
  
  constructor(private route: ActivatedRoute, private zipService: ZipService) { }

  ngOnInit() {
    this.detail$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedZip = params.get('zip');
        return this.zipService.getZipInfo(this.selectedZip);
      })          
    );
    this.detail$.subscribe(val => {
      console.log("val ==>" + val);
      const defaultlat = -80.8431;
      const defaultLong = 35.2271;
      const lat = val.places? val.places[0].latitude : 0;
      const long = val.places? val.places[0].longitude : 0;
      alert('the current zip Lat and longitude: ' + lat + ' : ' + long );
      this.displayMap({lat: defaultlat, long: defaultLong});
    })
  }

  displayMap(val) {    
    const {lat, long} = val;
    const options = {
      center: new google.maps.LatLng(long, lat),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, options);
  }

}
