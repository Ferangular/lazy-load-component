import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailsComponent } from '../components/details/details.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { AchievementsComponent } from '../components/achievements/achievements.component';
import { ProjectsSkeletonComponent } from '../components/projects-skeleton/projects-skeleton.component';
import { AchievementsSkeletonComponent } from '../components/achievements-skeleton/achievements-skeleton.component';
import { NavComponent } from '../nav/nav.component';
import { ContactComponent } from '../footer/contact.component';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  imports: [
    DetailsComponent,
    NavComponent,
    ProjectsComponent,
    AchievementsComponent,
    ProjectsSkeletonComponent,
    AchievementsSkeletonComponent,
    ContactComponent,
    TranslocoDirective,
  ],
})
export class UserProfileComponent {}
