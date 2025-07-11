import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-apexDonutChart',
  templateUrl: './apexDonutChart.component.html',
  styleUrls: ['./apexDonutChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexDonutChartComponent implements OnInit {
  public options:Partial<ApexOptions> | any = {
        series: [44, 55, 13, 43, 22],
        chart: {
          height: 350,
          type: 'donut',
          toolbar: {
            show: true
          }
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      };
  constructor() { }

  ngOnInit() {
  }

}
