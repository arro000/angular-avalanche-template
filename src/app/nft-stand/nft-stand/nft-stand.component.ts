import { Component, OnInit } from '@angular/core';
import { AvaxService } from 'src/app/avax.service';

@Component({
  selector: 'app-nft-stand',
  templateUrl: './nft-stand.component.html',
  styleUrls: ['./nft-stand.component.scss']
})
export class NftStandComponent implements OnInit {

  constructor(public avalanche: AvaxService) { }

  ngOnInit(): void {
  }

}
