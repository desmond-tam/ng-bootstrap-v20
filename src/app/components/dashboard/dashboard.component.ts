import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { BodyComponent } from "../body/body.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [HeaderComponent, SidenavComponent,BodyComponent, FooterComponent]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
