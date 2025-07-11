import { Component, OnInit } from '@angular/core';
import { ApexLineChartComponent } from '../apexLineChart/apexLineChart.component';
import { ApexAreaChartComponent } from "../apexAreaChart/apexAreaChart.component";
import { ApexColumnChartComponent } from "../apexColumnChart/apexColumnChart.component";
import { ApexBarChartComponent } from "../apexBarChart/apexBarChart.component";
import { ApexPieChartComponent } from '../apexPieChart/apexPieChart.component';
import { ApexDonutChartComponent } from "../apexDonutChart/apexDonutChart.component";
import { ApexRadarChartComponent } from "../apexRadarChart/apexRadarChart.component";
import { ApexPolarAreaChartComponent } from "../apexPolarAreaChart/apexPolarAreaChart.component";
import { ApexRadialBarChartComponent } from "../apexRadialBarChart/apexRadialBarChart.component";
import { ApexBubbleChartComponent } from "../apexBubbleChart/apexBubbleChart.component";


@Component({
  selector: 'app-apexChart',
  templateUrl: './apexChart.component.html',
  styleUrls: ['./apexChart.component.css'],
  imports: [ApexLineChartComponent, ApexAreaChartComponent,
    ApexColumnChartComponent, ApexBarChartComponent,
    ApexPieChartComponent, ApexDonutChartComponent, ApexRadarChartComponent, ApexPolarAreaChartComponent, ApexRadialBarChartComponent, ApexBubbleChartComponent]
})
export class ApexChartComponent implements OnInit {

  constructor() { }



  ngOnInit() {

  }

}
