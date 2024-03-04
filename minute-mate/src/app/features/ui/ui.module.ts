import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { TypeSafeMatCellDef } from './type-safe-mat-cell-def.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
 
@NgModule({
  declarations: [
    AvatarComponent,
    TypeSafeMatCellDef,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    AvatarComponent,
    TypeSafeMatCellDef,
    LoadingSpinnerComponent
  ]
})
export class UiModule { }
