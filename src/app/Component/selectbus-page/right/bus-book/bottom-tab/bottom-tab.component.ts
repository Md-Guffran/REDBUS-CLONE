import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-tab',
  templateUrl: './bottom-tab.component.html',
  styleUrls: ['./bottom-tab.component.css']
})
export class BottomTabComponent {
  @Input() busid: string = '';
  @Input() filledseats: number[] = [];
  @Input() seatprice: number = 0;
  @Input() routedetails: any;
  @Input() busarrivaltime: number = 0;
  @Input() busdeparturetime: number = 0;
  @Input() operatorname: string = '';

  tabstate: boolean[] = [true, false, false, false, false];

  constructor(private router: Router) {}

  handletabstate(index: number): void {
    this.tabstate = this.tabstate.map((state, i) => i === index);
    if (index === 2) {
      this.router.navigate(['/route-details', this.busid]);
    }
  }
}
