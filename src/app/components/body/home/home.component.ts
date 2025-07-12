import { Component, OnInit } from '@angular/core';
import { ReportComponent } from '../../report/report.component';
import { BudgetReportComponent } from '../../budget-report/budget-report.component';
import { TrafficChartComponent } from "../traffic-chart/traffic-chart.component";
import { NewsComponent } from '../news/news.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [BudgetReportComponent, ReportComponent,
    TrafficChartComponent, NewsComponent]
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

}
