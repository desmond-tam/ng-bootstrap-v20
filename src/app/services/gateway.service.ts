import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAction, initialAction } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  private PageBehavior = new BehaviorSubject<IAction>(initialAction);

  constructor() { }

  public setPage(action: IAction): void {
      this.PageBehavior.next(action);
  }

  public onPageChanged():Observable<IAction> {
      return this.PageBehavior;
  }

}
