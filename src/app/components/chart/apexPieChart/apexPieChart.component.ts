import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-apexPieChart',
  templateUrl: './apexPieChart.component.html',
  styleUrls: ['./apexPieChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexPieChartComponent implements OnInit {
  public options:Partial<ApexOptions> | any = {
            series: [44, 55, 13, 43, 22],
            chart: {
              height: 350,
              type: 'pie',
              toolbar: {
                show: true
              }
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
          }
  constructor() { }

  ngOnInit() {
  }

}
