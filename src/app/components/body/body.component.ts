import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BudgetReportComponent } from "../budget-report/budget-report.component";
import { ReportComponent } from '../report/report.component';
import { HomeComponent } from "./home/home.component";
import { GatewayService } from '../../services/gateway.service';
import { ActionType } from '../../models/common.model';
import { AlertComponent } from "./alert/alert.component";
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "./accordion/accordion.component";
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [CommonModule, HomeComponent, AlertComponent, AccordionComponent, BadgesComponent, BreadcrumbsComponent]
})
export class BodyComponent implements OnInit {
  page:string = 'none';
  constructor(private service:GatewayService) {

   }

  ngOnInit() {

    this.service.onPageChanged().subscribe((action) => {
      this.page = ActionType[action.page];
    });
  }



}
