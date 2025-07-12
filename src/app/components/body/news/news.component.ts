import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../../services/gateway.service';
import { INewsItem } from '../../../models/common.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  imports:[CommonModule]
})
export class NewsComponent implements OnInit {
  public newsList:INewsItem[]=[];
  constructor(private service:GatewayService) { }

  ngOnInit() {
    this.service.getNews()
      .subscribe({
        next:(list:INewsItem[]) => {
          this.newsList = list;
        }
      })
  }

}
