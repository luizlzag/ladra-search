import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.css'
})
export class SideNavBarComponent implements OnInit {

  name: string = "SideNavBarComponent";
  

  constructor() { }

  ngOnInit(): void {
  }


}
