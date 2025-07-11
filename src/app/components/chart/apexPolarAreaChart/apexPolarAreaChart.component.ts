import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';
@Component({
  selector: 'app-apexPolarAreaChart',
  templateUrl: './apexPolarAreaChart.component.html',
  styleUrls: ['./apexPolarAreaChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexPolarAreaChartComponent implements OnInit {
  public options:Partial<ApexOptions> | any = {
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        chart: {
          type: 'polarArea',
          height: 350,
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        }
      };
  constructor() { }

  ngOnInit() {
  }

}
