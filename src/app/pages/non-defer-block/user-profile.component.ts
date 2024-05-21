import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DetailsComponent } from '../components/details/details.component';
import { InViewportDirective } from '../../core/directives/in-viewport.directive';
import { BehaviorSubject } from 'rxjs';
import {AsyncPipe, NgIf, NgTemplateOutlet} from '@angular/common';
import { ProjectsSkeletonComponent } from "../components/projects-skeleton/projects-skeleton.component";
import { AchievementsSkeletonComponent } from "../components/achievements-skeleton/achievements-skeleton.component";
import { NavComponent } from '../nav/nav.component';
import { ContactComponent } from '../footer/contact.component';

function loadDeps() {
  return Promise.allSettled(
    [
      import("../components/projects/projects.component"),
      import("../components/achievements/achievements.component")
    ]
  );
}

function delay(timing: number) {
  return new Promise<void>(res => {
    setTimeout(() => {
      res()
    }, timing);
  })
}

type DepsLoadingState = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  imports: [DetailsComponent, NavComponent, ContactComponent, AsyncPipe, NgTemplateOutlet, InViewportDirective, ProjectsSkeletonComponent, AchievementsSkeletonComponent, NgIf]
})
export class UserProfileComponent {
  @ViewChild('contentSlot', { read: ViewContainerRef }) contentSlot!: ViewContainerRef;

  depsState$ = new BehaviorSubject<DepsLoadingState>('NOT_STARTED');

  // ---- Scenario #1: Lazy Loading with flickering issue
  async onViewport() {
    const loadingDep = import("../components/projects/projects.component");

    loadingDep.then(
      c => {
        this.depsState$.next('IN_PROGRESS');

        this.contentSlot.createComponent(c.ProjectsComponent);

        this.depsState$.next('COMPLETE');
      },
      err => this.depsState$.next('FAILED')
    )
  }

  // ---- Scenario #2: Lazy Loading without flickering issue
  // async onViewport() {
  //   const loadingDep = import("../../user/projects/projects.component");

  //   loadingDep.then(
  //     c => {
  //       // time after which rendering the loading template
  //       delay(1000).then(() => this.depsState$.next('IN_PROGRESS'));

  //       // minimum time to keep the loading template rendered
  //       delay(3000).then(() => {
  //         this.contentSlot.createComponent(c.ProjectsComponent);

  //         this.depsState$.next('COMPLETE')
  //       });
  //     },
  //     err => this.depsState$.next('FAILED')
  //   )
  // }

  // ---- Scenario #3. Lazy Loading of multiple dependencies
  // async onViewport() {
  //   const [projectsLoadModule, achievementsLoadModule] = await loadDeps();

  //   await delay(1000);

  //   this.depsState$.next('IN_PROGRESS');

  //   if (projectsLoadModule.status == "rejected" || achievementsLoadModule.status == "rejected") {
  //     this.depsState$.next('FAILED');
  //     return;
  //   }

  //   await delay(3000);

  //   this.contentSlot.createComponent(projectsLoadModule.value.ProjectsComponent);
  //   this.contentSlot.createComponent(achievementsLoadModule.value.AchievementsComponent);

  //   this.depsState$.next('COMPLETE');
  // }
}
