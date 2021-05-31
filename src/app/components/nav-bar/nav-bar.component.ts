import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "270px";
  }
  
  /* Set the width of the side navigation to 0 */
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




}
