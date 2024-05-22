import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-achievements-skeleton',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './achievements-skeleton.component.html',
  styleUrl: './achievements-skeleton.component.css',
})
export class AchievementsSkeletonComponent {}
