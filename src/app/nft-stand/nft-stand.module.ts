import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftStandComponent } from './nft-stand/nft-stand.component';
import { routing } from './nft-stand/nft-stand-routing.module';
import { AngularMaterialModule } from '../angularmaterial.module';
 


@NgModule({
  declarations: [NftStandComponent],
  imports: [
    CommonModule,
    routing,
    AngularMaterialModule
  ],bootstrap:[NftStandComponent]
 })
export class NftStandModule { }
