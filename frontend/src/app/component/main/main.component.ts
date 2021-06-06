import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {RestaurantSummaryService} from '../restaurant/restaurant-summary-service/restaurant-summary.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  addressForm = this.formBuilder.group({
    adr: ''
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private restaurantSummaryService: RestaurantSummaryService,
              private modalService: NgbModal)
  { }

  goToRestaurantOrders(): void {
    this.router.navigateByUrl('/restaurant-orders');
  }


  goToRestaurantMenu(): void {
    this.router.navigateByUrl('/restaurant-menu-update-panel');
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.restaurantSummaryService.address = this.addressForm.get('adr').value.toString();
    this.router.navigateByUrl('/restaurant-summary');
  }


  get address(): string {
    return this.restaurantSummaryService.address;
  }
}
