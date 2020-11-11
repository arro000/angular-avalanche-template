import { Injectable } from '@angular/core';
import {
  Avalanche,
  BinTools,
  Buffer,
  BN
} from "avalanche"
import { AVMAPI } from 'avalanche/dist/apis/avm';
import { environment } from 'src/environments/environment';
 @Injectable({
  providedIn: 'root'
})
export class AvaxService {

  avax!: Avalanche;
  xchain!: AVMAPI;
 
  constructor() { 
    let bintools = BinTools.getInstance();

    try{
      
      this.avax = new Avalanche(environment.nodeHost , environment.nodePort , environment.nodeProtocol , environment.myNetworkID, environment.myBlockchainID);
      this.xchain = this.avax.XChain(); //returns a reference to the X-Chain used by AvalancheJS
      console.log(this.xchain)

    }catch(err){
      console.log(err)
    }
   
  }
}
