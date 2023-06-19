import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  ratingArr: [];
  dateArr: [];
  timeArr: [];
  urlArr: [];
  allArr: {url: any, rating: any, date: any, time: any}[] =[];


  constructor() {
    this.ngOnInit;
  }

  async ngOnInit() {
    this.ratingArr =[];
    const ratingStorage = await localStorage.getItem('rating') || "[]";
    this.ratingArr = JSON.parse(ratingStorage);
    console.log(this.ratingArr);
    //
    this.dateArr =[];
    const dateStorage = await localStorage.getItem('date') || "[]";
    this.dateArr = JSON.parse(dateStorage);
    console.log(this.dateArr);
    //
    this.timeArr =[];
    const timeStorage = await localStorage.getItem('time') || "[]";
    this.timeArr = JSON.parse(timeStorage);
    console.log(this.timeArr);
    //
    this.urlArr =[];
    const urlStorage = await localStorage.getItem('url') || "[]";
    this.urlArr = JSON.parse(urlStorage);
    console.log(this.urlArr);
    //
    for(let i=0; i< this.ratingArr.length; i++)
    {
      let object = {url: this?.urlArr[i], rating: this?.ratingArr[i], date: this?.dateArr[i], time: this?.timeArr[i]};
      console.log(object);
      this.allArr.push(object);
    }
  
    console.log(this.allArr);
  }


  async ionViewWillEnter() {
  }
}
