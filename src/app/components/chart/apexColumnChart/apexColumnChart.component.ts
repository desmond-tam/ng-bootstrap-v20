import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';
import { ChartOptions } from '../../../models/common.model';

@Component({
  selector: 'app-apexColumnChart',
  templateUrl: './apexColumnChart.component.html',
  styleUrls: ['./apexColumnChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexColumnChartComponent implements OnInit {
  public options:Partial<ApexOptions> | any = {
          series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function(val:any) {
                return "$ " + val + " thousands"
              }
            }
          }
        };
  constructor() { }

  ngOnInit() {
  }

}
