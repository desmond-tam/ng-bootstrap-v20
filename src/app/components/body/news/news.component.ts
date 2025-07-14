import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../../services/gateway.service';
import { INewsItem } from '../../../models/common.model';
import { CommonModule } from '@angular/common';

const icons = ['text-muted','text-warning','text-dark','text-primary','text-danger','text-success']
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  imports:[CommonModule]
})
export class NewsComponent implements OnInit {
  public newsList:INewsItem[]=[];
  constructor(private service:GatewayService) { }

  getRandom(min:number,max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    this.service.getNews()
      .subscribe({
        next:(list:INewsItem[]) => {
          this.newsList = list.map(x => {
              return {
                date:x.date,
                message:x.message,
                badge:icons[this.getRandom(0,icons.length - 1)]
              } as INewsItem
            }
          );
        }
      })
  }

}
