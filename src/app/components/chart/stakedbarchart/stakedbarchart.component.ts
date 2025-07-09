import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stakedbarchart',
  templateUrl: './stakedbarchart.component.html',
  styleUrls: ['./stakedbarchart.component.css']
})
export class StakedbarchartComponent implements OnInit, AfterViewInit {
  options: any = {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            data: [-75, -15, 18, 48, 74],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Dataset 2',
            data: [-11, -1, 12, 62, 95],
            backgroundColor: 'rgb(75, 192, 192)',
          },
          {
            label: 'Dataset 3',
            data: [-44, -5, 22, 35, 62],
            backgroundColor: 'rgb(255, 205, 86)',
          },
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked'
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
    };
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    new Chart("stakedBarChart", this.options);
  }

}
