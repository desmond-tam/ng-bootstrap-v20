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
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./cards/cards.component";
import { ChartjsComponent } from "./chartjs/chartjs.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ListGroupComponent } from "./list-group/list-group.component";
import { ModalComponent } from "./modal/modal.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { ProgressComponent } from "./progress/progress.component";
import { TabsComponent } from "./tabs/tabs.component";
import { SpinnersComponent } from './spinners/spinners.component';
import { TooltipsComponent } from "./tooltips/tooltips.component";
import { FormEditorsComponent } from "../forms/formEditors/formEditors.component";
import { FormElementsComponent } from "../forms/formElements/formElements.component";
import { FormLayoutsComponent } from "../forms/formLayouts/formLayouts.component";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [CommonModule, AlertComponent, AccordionComponent,
    BadgesComponent, BreadcrumbsComponent, ButtonsComponent, CardsComponent, ChartjsComponent,
    HomeComponent, CarouselComponent, ListGroupComponent, ModalComponent, PaginationComponent,
    ProgressComponent, TabsComponent, SpinnersComponent, TooltipsComponent, FormEditorsComponent,
    FormElementsComponent, FormLayoutsComponent]
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
