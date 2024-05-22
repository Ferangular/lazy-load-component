import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  imports: [TranslocoDirective],
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {}
