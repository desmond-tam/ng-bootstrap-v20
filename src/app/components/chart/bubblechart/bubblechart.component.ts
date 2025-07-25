import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.css']
})
export class BubblechartComponent implements OnInit, AfterViewInit {
  options: any = {
    type: 'bubble',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'Dataset 1',
          data: [{
              x: 20,
              y: 30,
              r: 15
            },
            {
              x: 40,
              y: 10,
              r: 10
            },
            {
              x: 15,
              y: 37,
              r: 12
            },
            {
              x: 32,
              y: 42,
              r: 33
            }
          ],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
          label: 'Dataset 2',
          data: [{
              x: 40,
              y: 25,
              r: 22
            },
            {
              x: 24,
              y: 47,
              r: 11
            },
            {
              x: 65,
              y: 11,
              r: 14
            },
            {
              x: 11,
              y: 55,
              r: 8
            }
          ],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bubble Chart'
        }
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
     // ng-charts doesn't work for this angular version
    new Chart("bubbleChart", this.options);
  }

}
