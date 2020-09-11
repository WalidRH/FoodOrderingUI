import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  arrayInfoContact = [
    {name: 'Address', description: '123, Neville Street New York, NY 60606'},
    {name: 'Phone', description: '123-567-890'},
    {name: 'Email', description: 'info@yoursite.com'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
