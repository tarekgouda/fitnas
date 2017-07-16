import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})

export class StarterComponent{

  constructor(private router: Router) { }


	  redirect(pagename: string) {
	  	 console.log(pagename);
	 	 this.router.navigate(['./'+pagename]);
	  }
  
  title = 'app';
}
