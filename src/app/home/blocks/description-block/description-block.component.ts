import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-description-block',
  templateUrl: './description-block.component.html',
  styleUrls: ['./description-block.component.scss']
})
export class DescriptionBlockComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  gotoMenu(){
    this.router.navigate(['menu']);
  }
}
