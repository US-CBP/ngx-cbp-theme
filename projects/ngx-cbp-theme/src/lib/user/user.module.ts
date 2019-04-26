import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPUserMenuComponent } from './user-menu/user-menu.component';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CBPProgressModule } from '../progress/progress.module';

@NgModule({
  imports: [
    CommonModule, MatListModule, MatMenuModule, FlexLayoutModule, MatIconModule, MatButtonModule, CBPProgressModule
  ],
  exports: [CBPUserMenuComponent, MatMenuModule],
  declarations: [CBPUserMenuComponent]
})
export class CBPUserModule {
}
