import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdkScrollingComponent } from './cdk-scrolling/cdk-scrolling.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TypescriptComponent } from './typescript/typescript.component';

const routes: Routes = [
  { path: 'cdk-scrolling', component: CdkScrollingComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'typescript', component: TypescriptComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
