import { Component, OnInit } from '@angular/core';
import {CommonService } from '../common.service';
import {Restaurant} from '../model/restaurant-summary.model';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  alert = false;
  collection: any = [];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result: Restaurant) => {
      this.collection = result;
      console.log('resto list response: ', result);
    });
  }

/*
  deleteResto(resto){
    this.collection.splice(resto.id,-1)
    this.commonService.deleteResto(resto).subscribe((result)=>{
      console.log('Dane wykasowane', result)
      this.alert= true;
    })
  }
*/

  closeAlert(){
    this.alert= false;
  }

}
