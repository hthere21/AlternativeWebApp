import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { HandtrackerComponent } from '../handtracker/handtracker.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  onNext: boolean = false;
  ratingCheck: boolean = false;
  dateTime :Date;
  pitureUrl: String = "";
  rating: number;
  gesture: string = "";
  handTrackerService: HandtrackerComponent;
  //url: string = "https://images.unsplash.com/photo-1668943324398-f34d617bca01?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODgwMzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzA1NjcyMTc&ixlib=rb-4.0.3&q=80";
  url: string = '';

  constructor(private router: Router, private _activatedRoute: ActivatedRoute,private serviceData: ServiceService, private sharedService: ServiceService) {
   }

  async ngOnInit() {
      this.dateTime = new Date();
      // this.url = await this.serviceData.getArtDataUrl();
      this.url = '';
  }
  async nextPhoto(event: PredictionEvent){
    if(event.getPrediction() == this.gesture)
    {
      return;
    }
    else{
    this.gesture = event.getPrediction();
    }

    if(this.gesture == "Open Hand")
    {
      this.url = await this.serviceData.getArtDataUrl();
    }
  }

  ratingVid(event: PredictionEvent){
    if(event.getPrediction()== "Closed and Pinching Hands")
    {
      this.rating = 1;
      this.ratingCheck = true;
      console.log(this.rating);
    }
    else if(event.getPrediction() == "Closed Hand")
    {
      this.rating = 2;
      this.ratingCheck = true;
      console.log(this.rating);
    }
    else if(event.getPrediction() == "Two Closed Hands")
    {
      this.rating = 3;
      this.ratingCheck = true;
      console.log(this.rating);
    }
    else if(event.getPrediction() == "Two Hands Pointing")
    {
      this.rating = 4;
      this.ratingCheck = true;
      console.log(this.rating);
    }
    else if(event.getPrediction() == "Closed and Pointing Hands")
    {
      this.rating = 5;
      this.ratingCheck = true;
      console.log(this.rating);
    }
  }

  onSubmit()
  {
    this.ratingCheck = false;
    const ratingStorage = localStorage.getItem('rating');
    let ratings;
    const dateStorage = localStorage.getItem('date');
    let date;
    const urlStorage = localStorage.getItem('url');
    let url;
    const timeStorage = localStorage.getItem('time');
    let time;
    //rating
    if(ratingStorage === null)
    {
      ratings =[];
    }
    else
    {
      ratings = JSON.parse(ratingStorage);
    }
    ratings.push(this.rating);
    localStorage.setItem('rating', JSON.stringify(ratings));
    //date
    if(dateStorage === null)
    {
      date =[];
    }
    else
    {
      date = JSON.parse(dateStorage);
    }
    date.push(this.dateTime.toDateString());
    localStorage.setItem('date', JSON.stringify(date));
    //time
    if(timeStorage === null)
    {
      time =[];
    }
    else
    {
      time = JSON.parse(timeStorage);
    }
    this.dateTime = new Date();
    time.push(this.dateTime.toLocaleTimeString());
    localStorage.setItem('time', JSON.stringify(time));
    //url
    if(urlStorage === null)
    {
      url =[];
    }
    else
    {
      url = JSON.parse(urlStorage);
    }
    url.push(this.url);
    localStorage.setItem('url', JSON.stringify(url));
  }

  
  goingToHistory(event: PredictionEvent) {
    if(event.getPrediction() == "Two Hands Pinching")
    {
    this.sharedService.handTracker.stopDetection();
    this.router.navigate(['/history-page']);
    }
  }
}


