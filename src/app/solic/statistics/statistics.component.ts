import { Component, OnInit ,ViewChild} from '@angular/core';
import {StatisticsService} from '../../services/statistics/statistics.service'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public startDate :any;
  public endDate :any;
  public startTime:any;
  public endTime:any;
  
  constructor(private statisticsService : StatisticsService) {
    
   }

 

  ngOnInit() {
      
  }

  send(){
    //localhost:3000/devices/1/get_statistics?start=2017-03-28+04%3A00%3A00&end=2017-03-28+04%3A00%3A00
    //start=2017-03-28+04%3A00%3A00&end=2017-03-28+04%3A00%3A00
    //start=2017-09-12+14%3A00%3A00&end=2017-11-01+05%3A00%3A00
    let h=this.startTime.split(':')[0]
    let m=this.startTime.split(':')[1]
    let s="00"
    h=h+"%3A"
    m=m+"%3A"

    let hh=this.endTime.split(':')[0]
    let mm=this.endTime.split(':')[1]
    let ss="00"
    hh=hh+"%3A"
    mm=mm+"%3A"
    
    const url="start="+`${this.startDate}`+ "+" + h + m + s +"&end="+this.endDate +"+"+hh+mm+ss;
    this.statisticsService.getData(url).subscribe((res)=>{
      console.log("response");
      console.log(res);
    });
    //console.log (url)
    //console.log(this.startDate + " , "+ this.startTime+","+this.endDate+","+this.endTime);
  }
}
