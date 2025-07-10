import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BudgetReportComponent } from "../budget-report/budget-report.component";
import { ReportComponent } from '../report/report.component';
import { HomeComponent } from "./home/home.component";
import { GatewayService } from '../../services/gateway.service';
import { ActionType, initialAction } from '../../models/common.model';
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
import { FormValidationComponent } from '../forms/formValidation/formValidation.component';
import { IconsComponent } from './icons/icons.component';
import { BoxiconsComponent } from './boxicons/boxicons.component';
import { RemixComponent } from './remix/remix.component';
import { PagesBlankComponent } from './pagesBlank/pagesBlank.component';

const registry : Record<string,any> = {
  'home':HomeComponent,
  'alert':AlertComponent,
  'accordion':AccordionComponent,
  'badges':BadgesComponent,
  'breadcrumbs':BreadcrumbsComponent,
  'buttons':ButtonsComponent,
  'cards':CardsComponent,
  'carousel':CarouselComponent,
  'listGroups':ListGroupComponent,
  'modals':ModalComponent,
  'pagination':PaginationComponent,
  'progress':ProgressComponent,
  'spinners':SpinnersComponent,
  'tabs':TabsComponent,
  'tooltips':TooltipsComponent,
  'formEditors':FormEditorsComponent,
  'formElements':FormElementsComponent,
  'formLayouts':FormLayoutsComponent,
  'formValidation':FormValidationComponent,
  'icons':IconsComponent,
  'boxicons':BoxiconsComponent,
  'chartjs':ChartjsComponent,
  'remix':RemixComponent,
  'pagesBlank':PagesBlankComponent
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [CommonModule]
})
export class BodyComponent implements OnInit,AfterViewInit {
 @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  page:string = 'none';

  constructor(private service:GatewayService) {
  }

  loadComponent(name:string) {
    this.container?.clear();
    this.container?.createComponent(registry[name]);
  }

  ngOnInit() {
    this.service.onPageChanged().subscribe((action) => {
      const name = ActionType[action.page];
      this.loadComponent(name);
    });
  }

  ngAfterViewInit(): void {
    this.container?.createComponent(HomeComponent);
  }



}
