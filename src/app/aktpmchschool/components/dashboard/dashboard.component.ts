import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../shared/services/loading.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { CarouselMetadata } from './../../model/carousel-metadata.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true } }
  ]
})
export class DashboardComponent implements OnInit {
  carouselMetadata: any;
  constructor(private loadingService: LoadingService, private router: Router) {}

  ngOnInit() {
    this.loadingService.toggleLoadingIndicator(false);
    this.carouselMetadata = CarouselMetadata;
  }

  demoHere() {
  }
}
