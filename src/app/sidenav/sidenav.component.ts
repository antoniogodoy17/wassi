import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	$('.sidenav').sidenav();
	$('.collapsible').collapsible();
  }

}
