import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-apexBarChart',
  templateUrl: './apexBarChart.component.html',
  styleUrls: ['./apexBarChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexBarChartComponent implements OnInit {
  public options:Partial<ApexOptions> | any = {
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
      };
  constructor() { }

  ngOnInit() {
  }

}
