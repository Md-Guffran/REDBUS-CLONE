import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Route } from '../model/routes.model';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
private datasource=new BehaviorSubject<any>(null);
currentdata=this.datasource.asObservable();
private passdetails=new BehaviorSubject<any>(null);
passdata=this.passdetails.asObservable();
private routeDetails: Route[] = [];

constructor() { }

sendobj(obj:any){
  this.datasource.next(obj)
}

passobj(obj:any){
  this.passdetails.next(obj);
}

getPassDetails(): any {
  return this.passdetails;
}

getRouteDetails(): any {
  return this.routeDetails;
}

}
