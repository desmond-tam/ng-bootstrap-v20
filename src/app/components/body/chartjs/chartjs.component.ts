import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart  } from 'chart.js';
import { LinechartComponent } from '../../chart/linechart/linechart.component';
import { BarchartComponent } from "../../chart/barchart/barchart.component";
import { PiechartComponent } from '../../chart/piechart/piechart.component';
import { DoughnutchartComponent } from "../../chart/doughnutchart/doughnutchart.component";
import { RadarchartComponent } from '../../chart/radarchart/radarchart.component';
import { PolarareachartComponent } from "../../chart/polarareachart/polarareachart.component";
import { StakedbarchartComponent } from "../../chart/stakedbarchart/stakedbarchart.component";
import { BubblechartComponent } from '../../chart/bubblechart/bubblechart.component';


@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css'],
  imports: [LinechartComponent, BarchartComponent, PiechartComponent, DoughnutchartComponent,
    RadarchartComponent, PolarareachartComponent, StakedbarchartComponent,
  BubblechartComponent]
})
export class ChartjsComponent implements OnInit,AfterViewInit {
  radarOptions: any = {
        type: 'radar',
        data: {
          labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
          ],
          datasets: [{
            label: 'First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }, {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }]
        },
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        }
  };
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
      new Chart("radarChart", this.radarOptions);
  }

}
