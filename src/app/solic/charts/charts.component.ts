import { Component, OnInit,AfterViewInit ,OnChanges} from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";
import {ChartService} from'../../services/chart/chart.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements AfterViewInit , OnInit{
  private chart:AmChart;
  private data = [];
  isDataLoaded:boolean=false;
 
  constructor(
    private AmCharts: AmChartsService,
    private chartService: ChartService
  )    
  {}

 loadChart(data){
    this.chart = this.AmCharts.makeChart("chart",
    {
      "type": "serial",
      "categoryField": "time",
      "dataDateFormat": "YYYY-MM-DD HH:NN:SS",
      "categoryAxis": {
        "minPeriod": "ss",
        "parseDates": true
      },
      "chartCursor": {
        "enabled": true,
        "categoryBalloonDateFormat": "JJ:NN:SS"
      },
      "chartScrollbar": {
        "enabled": true
      },
      
      "graphs": [
        {
          "bullet": "round",
          "id": "AmGraph-1",
          "title": "graph 1",
          "valueField": "measure"
        },
      ],
      
      "valueAxes": [
        {
          "id": "ValueAxis-1",
          "title": "Axis title"
        }
      ],
  
      "legend": {
        "enabled": true,
        "useGraphSettings": true
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Chart Title"
        }
      ],
      "dataProvider":data
    })
 }

  ngOnInit(){
   
    this.chartService.getData().subscribe(response=>{

      this.data=response.json();
      console.log("oninit")

      //console.log(this.data)

      this.loadChart(this.data);
    })    

  }

  ngAfterViewInit() {
 

    
  }

  
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
