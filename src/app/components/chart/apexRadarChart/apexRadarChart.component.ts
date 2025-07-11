import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';
@Component({
  selector: 'app-apexRadarChart',
  templateUrl: './apexRadarChart.component.html',
  styleUrls: ['./apexRadarChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexRadarChartComponent implements OnInit {
  public options:Partial<ApexOptions> | any = {
          series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
          }],
          chart: {
            height: 350,
            type: 'radar',
          },
          xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
          }
        };
  constructor() { }

  ngOnInit() {
  }

}
