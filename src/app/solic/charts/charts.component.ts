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

      "marginRight": 80,
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
        "enabled": true,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0.5,
        "selectedBackgroundAlpha": 0.3,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
      },
      
      "graphs": [
        {
          "fillAlphas": 0.8,          
          "bullet": "round",
          "id": "AmGraph-1",
          "title": "graph 1",
          "valueField": "measure"
        },
      ],
      
      "valueAxes": [
        {
          "id": "ValueAxis-1",
          "title": "Irradiancia"
        }
      ],
  
      "legend": {
        "enabled": true,
        "useGraphSettings": true
      },
      "export": {
        "enabled": true,
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 30,
          "text": "Irradiancia vs Tiempo",
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
