import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAction, INewsItem, initialAction } from '../models/common.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  private PageBehavior = new BehaviorSubject<IAction>(initialAction);

  constructor(private service:DataService) { }

  public setPage(action: IAction): void {
      this.PageBehavior.next(action);
  }

  public onPageChanged():Observable<IAction> {
      return this.PageBehavior;
  }


  public getNews():Observable<INewsItem[]> {
    return this.service.getNews();
  }

}
