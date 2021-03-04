import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'playground',
    loadChildren: () => import('./playground/playground.module').then((m) => m.PlaygroundModule),
  },
  { path: 'lazy-page', loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule) },
];

@NgModule({
  imports: [
    QuicklinkModule,
    // RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', preloadingStrategy: QuicklinkStrategy }),
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
