import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';


interface ChartOptions {
  series: any;
  chart: any;
  xaxis: any;
  title: any;
};

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  imports: [NgApexchartsModule]
})
export class ReportComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Monthly Sales Report",
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
   }

  ngOnInit() {
   }


}
