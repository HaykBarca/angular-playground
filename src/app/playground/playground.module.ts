import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { CdkScrollingComponent } from './cdk-scrolling/cdk-scrolling.component';

@NgModule({
  declarations: [CdkScrollingComponent],
  imports: [CommonModule, PlaygroundRoutingModule, ScrollingModule],
})
export class PlaygroundModule {}
