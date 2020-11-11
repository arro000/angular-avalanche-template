import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
  {
    path: '',
     component: DashboardComponent,
  } ,
  {
    path: 'nft-stand',
    loadChildren: () => import('./nft-stand/nft-stand.module').then(m => m.NftStandModule)
  },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing  = RouterModule.forRoot(routes)
