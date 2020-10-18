import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.scss']
})
export class AddBlockComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onAddMenu(){
    this.router.navigate(['/edit-menu']);
  }

}
