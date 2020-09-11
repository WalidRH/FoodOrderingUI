import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  arrayInfoContact = [
    {name: 'Address', description: '123, Neville Street New York, NY 60606'},
    {name: 'Phone', description: '123-567-890'},
    {name: 'Email', description: 'info@yoursite.com'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
