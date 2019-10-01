import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  getYear() {
    const date = new Date();
    return date.getFullYear();
  }

  constructor() { }

  ngOnInit() {
    this.getYear();
  }

}
