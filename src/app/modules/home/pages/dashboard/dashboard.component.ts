import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isClosedSidenav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sidenavCloser(drawer: any) {
    this.isClosedSidenav = !this.isClosedSidenav;
    drawer.toggle();
  }
}
