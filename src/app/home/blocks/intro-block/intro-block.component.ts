import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-intro-block',
  templateUrl: './intro-block.component.html',
  styleUrls: ['./intro-block.component.scss'],
})
export class IntroBlockComponent implements OnInit {

  offset: any;
  isScroll = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.offset = window.pageYOffset * 0.5;
    console.log("SCROLLING : ",this.offset);
    this.isScroll = true;
  }
}
