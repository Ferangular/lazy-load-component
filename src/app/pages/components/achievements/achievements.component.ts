import { ChangeDetectionStrategy, Component } from '@angular/core';
import { achievements } from '../../../core/data/achievements';

@Component({
  selector: 'app-achievements',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent {
  achievements = achievements;
}
