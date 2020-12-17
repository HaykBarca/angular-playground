import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdkScrollingComponent } from './cdk-scrolling/cdk-scrolling.component';

const routes: Routes = [{ path: 'cdk-scrolling', component: CdkScrollingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
