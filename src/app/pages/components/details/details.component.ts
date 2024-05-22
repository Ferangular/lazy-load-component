import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './details.component.html',
  imports: [TranslocoDirective],
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {}
