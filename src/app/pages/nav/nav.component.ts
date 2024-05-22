import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav.component.html',
  imports: [TranslocoDirective],
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  protected readonly translate = inject(TranslocoService);
  setLanguage(lang: string): void {
    this.translate.setActiveLang(lang);
  }
}
