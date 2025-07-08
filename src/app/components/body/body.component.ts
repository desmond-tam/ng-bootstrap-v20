import { Component, OnInit } from '@angular/core';
import { BudgetReportComponent } from "../budget-report/budget-report.component";
import { ReportComponent } from '../report/report.component';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [ ReportComponent]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
