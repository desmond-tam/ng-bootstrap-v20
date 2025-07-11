import { Component, OnInit } from '@angular/core';
import { ApexLineChartComponent } from '../apexLineChart/apexLineChart.component';
import { ApexAreaChartComponent } from "../apexAreaChart/apexAreaChart.component";
import { ApexColumnChartComponent } from "../apexColumnChart/apexColumnChart.component";

@Component({
  selector: 'app-apexChart',
  templateUrl: './apexChart.component.html',
  styleUrls: ['./apexChart.component.css'],
  imports: [ApexLineChartComponent, ApexAreaChartComponent, ApexColumnChartComponent]
})
export class ApexChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
