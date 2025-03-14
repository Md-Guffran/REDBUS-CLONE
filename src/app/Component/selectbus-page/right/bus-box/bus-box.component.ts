import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-box',
  templateUrl: './bus-box.component.html',
  styleUrls: ['./bus-box.component.css']
})
export class BusBoxComponent implements OnInit {
  @Input() rating: number[] = [];
  @Input() operatorname: string = '';
  @Input() bustype: string = '';
  @Input() departuretime: string = '';
  @Input() reschedulable: number = 0;
  @Input() livetracking: number = 0;
  @Input() filledseats: any[] = [];
  @Input() routedetails: any;
  @Input() busid!: string;
  @Input() avgrating: number = 0;
  @Input() totalreview: number = 0;
  @Input() seatprice: number = 0;
  @Input() bustypename: string = '';
  @Input() busdeparturetime!: number;
  @Input() busarrivaltime!: number;


  constructor() { }

  ngOnInit(): void {
    this.rating.forEach((item, index) => {
      this.avgrating += item;
      this.totalreview += index;
    });
    if (this.totalreview == 0) {
      this.totalreview = 1;
    }
    this.avgrating = +this.avgrating / this.totalreview;
    console.log(this.avgrating);

    if (this.bustype === 'standard') {
      this.seatprice = 50 * Math.floor(this.routedetails.duration) / 2;
      this.bustypename = 'standard';
      console.log("hey this seat price ", this.seatprice);

    } else if (this.bustype === 'sleeper') {
      this.seatprice = 100 * Math.floor(this.routedetails.duration) / 2;
      this.bustypename = 'sleeper';
    } else if (this.bustype === 'A/C Seater') {
      this.seatprice = 125 * Math.floor(this.routedetails.duration) / 2;
      this.bustypename = 'A/C Seater';
      console.log("hey this seat price ", this.seatprice);
    } else {
      this.seatprice = 75 * Math.floor(this.routedetails.duration) / 2;
      this.bustypename = 'Non - A/C';
      console.log("hey this seat price of Non-A/C ", this.seatprice);
    }
    const numericvalue = parseInt(this.routedetails.busdeparturetime);
    this.busdeparturetime = numericvalue;
    console.log("📌 Bus Box Received - Departure Time:", this.busdeparturetime) ;
    this.busarrivaltime = (numericvalue + this.routedetails.duration) % 24;
    console.log("📌 Bus Box Received - Arrival Time:", this.busarrivaltime) ;


    // console.log("🟢 Bus Box Component Initialized");
    // console.log("📌 Received Departure Time:", this.busdeparturetime);
    // console.log("📌 Received Arrival Time:", this.busarrivaltime);
    // console.log("🕒 Converted Departure Time:", this.convertTime(this.busdeparturetime));
    // console.log("🕒 Converted Arrival Time:", this.convertTime(this.busarrivaltime));
  }
}
