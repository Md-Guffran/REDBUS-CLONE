import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectbus-page',
  templateUrl: './selectbus-page.component.html',
  styleUrls: ['./selectbus-page.component.css']
})
export class SelectbusPageComponent implements OnInit {
  routedetails: any = { departureLocation: 'Delhi', arrivalLocation: 'Jaipur', duration: 8 ,busdeparturetime :10,busarrivaltime : 18 };
  
  seatprice: number | null = null;
  busdeparturetime: number | null = null;
  busarrivaltime: number | null = null;

  ngOnInit() {
    let { busdeparturetime, busarrivaltime } = this.routedetails;
    console.log("🔹 ngOnInit is running...");

    
  console.log("📌 Routedetails:", this.routedetails);
  console.log("📌 Duration:", this.routedetails?.duration);
  
  this.busdeparturetime = this.routedetails.busdeparturetime;
  this.busarrivaltime = this.routedetails.busarrivaltime; 
 // this.busarrivaltime = (this.busdeparturetime + this.routedetails.duration) % 24;
  

  // console.log("📌 Assigned Departure Time:", this.busdeparturetime, typeof this.busdeparturetime); // Expect 10
  // console.log("📌 Assigned Arrival Time:", this.busarrivaltime, typeof this.busarrivaltime); // Expect 18



    // this.busarrivaltime = (this.busdeparturetime + this.routedetails.duration) % 24;
    //this.seatprice = 500; 
    
    // if (this.routedetails?.duration) {
    //   this.busarrivaltime = (this.busdeparturetime + (this.routedetails?.duration || 0)) % 24;
    //   console.log("✅ Assigned Arrival Time:", this.busarrivaltime);
    // } else {
    //   console.error("❌ `routedetails.duration` is undefined or missing!");
    // }

    // console.log("Departure Time:", this.busdeparturetime);
  //   console.log("Arrival Time:", this.busarrivaltime);
  //   console.log("Seat Price:", this.seatprice);
    

  //   console.log("📌 Bus Box Received - Departure Time:", this.busdeparturetime);
  // console.log("📌 Bus Box Received - Arrival Time:", this.busarrivaltime);

  
}



}


