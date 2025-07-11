import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-apexLineChart',
  templateUrl: './apexLineChart.component.html',
  styleUrls: ['./apexLineChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexLineChartComponent implements OnInit {
  public chartOptions: Partial<ApexOptions> | any = {
    chart:{
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }]
  };
  constructor() { }


  ngOnInit() {
  }

}
