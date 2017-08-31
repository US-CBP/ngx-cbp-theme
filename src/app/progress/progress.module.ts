import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPLoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[CBPLoadingComponent],
  declarations: [CBPLoadingComponent]
})
export class CBPProgressModule { }
