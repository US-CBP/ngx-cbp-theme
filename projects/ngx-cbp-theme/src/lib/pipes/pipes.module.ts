import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPDatetimePipe } from './datetime.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
    exports: [CBPDatetimePipe],
  declarations: [CBPDatetimePipe]
})
export class CBPPipesModule { }
