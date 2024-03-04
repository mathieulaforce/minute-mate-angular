import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-avatar',
  template: `
    <div
      class="inline-flex items-center justify-center align-middle overflow-hidden select-none rounded-full w-full h-full"
    >
      <img
        *ngIf="imageUrl"
        [hidden]="!showImage"
        [src]="imageUrl"
        class="w-full h-full object-cover"
        alt="avatar displaytext"
        (load)="showImage = true"
        (error)="showImage = false"
      />
      <div
        *ngIf="!showImage"
        class="w-full h-full font-medium text-base bg-gray-400 text-white grid items-center text-center"
      >
        {{ displayText | uppercase }}
      </div>
    </div>
  `,
})
export class AvatarComponent {
  @Input() imageUrl?: string | null = null;
  @Input() displayText!: string;

  showImage = false;
}
