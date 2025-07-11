import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';
@Component({
  selector: 'app-apexBubbleChart',
  templateUrl: './apexBubbleChart.component.html',
  styleUrls: ['./apexBubbleChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexBubbleChartComponent implements OnInit {
  public options:Partial<ApexOptions> | any = {};
  private generateData(baseval:number, count:number, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
          var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
          series.push([x, y, z]);
          baseval += 86400000;
          i++;
        }
        return series;
      }
  constructor() {
    this.options = {
        series: [{
            name: 'Bubble1',
            data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Bubble2',
            data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Bubble3',
            data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'Bubble4',
            data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          }
        ],
        chart: {
          height: 333,
          type: 'bubble',
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8
        },
        xaxis: {
          tickAmount: 12,
          type: 'category',
        },
        yaxis: {
          max: 70
        }
      };
   }

  ngOnInit() {
  }

}
