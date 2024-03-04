import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from './first-letter.pipe';



@NgModule({
  declarations: [
    FirstLetterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstLetterPipe
  ]

})
export class SharedModule { }
