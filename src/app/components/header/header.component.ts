import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle() {
     document.body.classList.toggle("toggle-sidebar");
  }

  search(evt:any) {
    evt.preventDefault();
  }

}
