import { Component, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rick-and-morty';
  cargando= true;

  constructor(private  router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.setLoader(500)
      }
    });
  }

  setLoader(interval: number = 1000){
  this.cargando= true;
  setTimeout(()=>{
    this.cargando = false
  }, interval)


  }
}
