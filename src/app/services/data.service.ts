import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable  } from 'rxjs';
import { INewsItem } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http:HttpClient) { }

public getNews():Observable<INewsItem[]> {
  return new Observable(subscriber => {
    this.http.get<any>('assets/data/news.json')
      .subscribe({
        next:(result:any) => {
          const list = result?.data;
          subscriber.next(list);
          subscriber.complete();
        }
      })
  })
}

}
