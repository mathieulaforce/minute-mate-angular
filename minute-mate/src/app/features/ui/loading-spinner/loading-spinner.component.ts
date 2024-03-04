import { Component } from '@angular/core';

@Component({
  selector: 'ui-loading-spinner',
  template: `
    <mat-progress-spinner        
        [color]="'primary'"
        [mode]="'indeterminate'" >
    </mat-progress-spinner>
  `,
  
})
export class LoadingSpinnerComponent {

}
