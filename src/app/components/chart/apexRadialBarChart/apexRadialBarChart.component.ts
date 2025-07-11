import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';
@Component({
  selector: 'app-apexRadialBarChart',
  templateUrl: './apexRadialBarChart.component.html',
  styleUrls: ['./apexRadialBarChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexRadialBarChartComponent implements OnInit {
  public options:Partial<ApexOptions> | any =  {
        series: [44, 55, 67, 83],
        chart: {
          height: 350,
          type: 'radialBar',
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function(w:string) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      };
  constructor() { }

  ngOnInit() {
  }

}
