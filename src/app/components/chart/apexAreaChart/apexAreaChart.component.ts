import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import dayjs from 'dayjs';
import { ChartOptions } from '../../../models/common.model';



@Component({
  selector: 'app-apexAreaChart',
  templateUrl: './apexAreaChart.component.html',
  styleUrls: ['./apexAreaChart.component.css'],
  imports:[NgApexchartsModule]
})
export class ApexAreaChartComponent implements OnInit {
  public chartOptions: Partial<ChartOptions> | any = {
     series: [
        {
          name: "STOCK ABC",
          data: [
              8107.85,
              8128.0,
              8122.9,
              8165.5,
              8340.7,
              8423.7,
              8423.5,
              8514.3,
              8481.85,
              8487.7,
              8506.9,
              8626.2,
              8668.95,
              8602.3,
              8607.55,
              8512.9,
              8496.25,
              8600.65,
              8881.1,
              9340.85
            ],
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left"
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: [
              "13",
              "14",
              "15",
              "16",
              "17",
              "20",
              "21",
              "22",
              "23",
              "24",
              "27",
              "28",
              "29",
              "30",
              "01",
              "04",
              "05",
              "06",
              "07",
              "08"
            ],
      xaxis: {
        type: "category",
        labels:{
          show:true,
          formatter:(value:string) => {
            return dayjs(`2025-10-${value}`).format('DD/MMM');
          }
        }
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };

  constructor() {
  }

  ngOnInit() {
  }

}
