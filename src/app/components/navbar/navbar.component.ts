import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  filterArrays(event: Event | any){
    if(event.key === "Enter"){
      location.assign(location.origin + location.pathname + `?filter=${event.target.value}` )
    }
  }

}
