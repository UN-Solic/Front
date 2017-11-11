import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
@Injectable()
export class StatisticsService {

  statisticsURL="http://localhost:3000/devices/1/get_statistics?"
  constructor(private http:Http) { }
  getData(url){
    this.statisticsURL=this.statisticsURL+url;
    return this.http.get(this.statisticsURL).map((response :Response)=>{
      console.log("response")
      console.log(response.status);
      console.log(response.json())
      return response;
    }).catch(this.handleError);
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    // alert(errMsg);
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}

}
