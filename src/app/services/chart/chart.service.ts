import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
@Injectable()
export class ChartService {
  dataURL="http://localhost:3000/irradiance_measures"
  constructor(private http: Http) { }
  dataService=[]
  getData(){
    return this.http.get(this.dataURL).map((response :Response)=>{
      //console.log("response")
      //console.log(response.status);
      //console.log(response.json())
      this.dataService=response.json();
      return response;
    }).catch(this.handleError);
  }






  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      if(error.status==401 || error.status==404){
        alert ("No estas autorizado para entrar");
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
     //alert(errMsg);
    }
    //console.error(errMsg);
    return Observable.throw(errMsg);
}
}
