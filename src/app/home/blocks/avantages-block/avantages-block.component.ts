import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avantages-block',
  templateUrl: './avantages-block.component.html',
  styleUrls: ['./avantages-block.component.scss']
})
export class AvantagesBlockComponent implements OnInit {

  advantagesList = [
    {
      'title': 'More than 20,000 dishes to orders',
      'description': 'we have more than 20,000 delicious dishes that you can choose from.'
    },
    {
      'title': 'Easy Ordering by Phone',
      'description': 'This allows you to order quickly and easily. Accessible at any time.'
    },
    {
      'title': 'Your table will be waiting for you',
      'description': 'By the time you arrive to our restaurent, your place will be reserved for you.'
    },
    {
      'title': 'Your meal will be ready',
      'description': 'By the time you arrive to our restaurent, the meal that you order, is coocked and ready to be served. So no need to wait.'
    },
    {
      'title': '100% positive feedbacks',
      'description': 'We care about our customers, that is why we get 100% positive feedbacks.'
    },
    {
      'title': 'delicious meals',
      'description': 'We have the top chefs all arowned the world, and all our dishes got 5 stars in quality'
    }
  ];

  listsize = this.advantagesList.length;
  constructor() { }

  ngOnInit(): void {
  }

}
