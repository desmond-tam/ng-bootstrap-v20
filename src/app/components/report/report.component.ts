import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
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
  public chartOptions: Partial<ChartOptions> = {};

  constructor() {

   }

  ngOnInit() {
    this.chartOptions = {
        series: [
          {
            name: "Sales",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
          }
        ],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        title: {
          text: "Monthly Sales Data",
          align: 'left'
        }
      };
   }

}
