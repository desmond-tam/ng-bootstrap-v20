import {  Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, NgApexchartsModule, ApexOptions } from 'ng-apexcharts';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  imports: [NgApexchartsModule]
})
export class ReportComponent implements OnInit {
  public chartOptions: Partial<ApexOptions> = {};

  constructor() {}

  public series:ApexAxisChartSeries = [{
            name: "Sales",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
          }];
  public chart:ApexChart | any = {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        };
 public xaxis:ApexXAxis = {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        };
 public title:ApexTitleSubtitle = {
          text: "Monthly Sales Data",
          align: 'left'
        };

  ngOnInit() {

  }
}
