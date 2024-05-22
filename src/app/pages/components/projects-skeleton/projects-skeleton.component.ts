import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects-skeleton',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './projects-skeleton.component.html',
  styleUrl: './projects-skeleton.component.css',
})
export class ProjectsSkeletonComponent {}
