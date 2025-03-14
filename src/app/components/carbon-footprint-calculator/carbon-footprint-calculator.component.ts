import { Component } from '@angular/core';

@Component({
  selector: 'app-carbon-footprint-calculator',
  templateUrl: './carbon-footprint-calculator.component.html',
  styleUrls: ['./carbon-footprint-calculator.component.css']
})
export class CarbonFootprintCalculatorComponent {
  distance: number = 0;
  modeOfTravel: string = 'bus';
  carbonFootprint: number = 0;
  incentive: string = '';
  couponCode: string = '';

  calculateCarbonFootprint() {
    const emissionFactors: { [key: string]: number } = {
      bus: 0.21,
      train: 0.05,
      car: 0.27,
      plane: 0.15
    };

    this.carbonFootprint = this.distance * (emissionFactors[this.modeOfTravel] || 0);
    this.calculateIncentive();
  }

  calculateIncentive() {
    if (this.carbonFootprint < 50) {
      this.incentive = 'You get a 10% discount on your next ride!';
      this.couponCode = this.generateCouponCode();
    } else if (this.carbonFootprint < 100) {
      this.incentive = 'You get a 5% discount on your next ride!';
      this.couponCode = this.generateCouponCode();
    } else {
      this.incentive = 'Thank you for using our service!';
      this.couponCode = '';
    }
  }

  generateCouponCode(): string {
    return 'ECO' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }
}