import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NftStandComponent } from './nft-stand.component';
 
const routes: Routes =[
  {
    path: '',
     component: NftStandComponent,
  } ,
  {
    path: 'nft-stand',
    component:NftStandComponent
  },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NftStandRoutingModule { }

export const routing  = RouterModule.forChild(routes)
