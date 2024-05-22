import { ChangeDetectionStrategy, Component } from '@angular/core';
import { projects } from '../../../core/data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = projects;
}
