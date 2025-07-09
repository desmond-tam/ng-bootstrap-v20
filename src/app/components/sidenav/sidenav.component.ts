import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { ActionType } from '../../models/common.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  ActionType: any;

  constructor(private service:GatewayService) { }

  ngOnInit() {
  }

  changePage(page:string) {
      this.service.setPage({
        page: (ActionType as any)[page] as ActionType,
        payload: {
          fullscreen: false
        }
      });
  }

}
