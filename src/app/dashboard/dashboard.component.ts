import { Component, OnInit } from '@angular/core';
import { AvaxService } from '../avax.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;

  constructor(public avalanche: AvaxService){

    this.avalanche.avax.Health().getLiveness().catch(d=> console.log(d))
  }
  
	ngOnInit() {
	 
	}

	 
}
 