import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProjectsModel } from 'src/app/core/models/projects.model';
import { ProfileService } from 'src/app/core/services/profile-service/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projects: ProjectsModel[] = [];
  pageProjectsSlice: ProjectsModel[];

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  sidenavCloser(drawer: any) {
    drawer.toggle();
    localStorage.setItem('isClosedSidenav', (!this.isClosedSidenav).toString());
  }

  getProjects() {
    this.profileService.getProjects()
      .subscribe((data) => {
        this.projects = this.getSortedSignificantProjects(data).concat(this.getSortedCommonProjects(data));
        this.pageProjectsSlice = this.projects.slice(0, 6);
      });
  }

  OnPageChange(e: PageEvent) {
    const startIndex = e.pageIndex * e.pageSize;
    let endIndex = startIndex + e.pageSize;
    if(endIndex > this.projects.length) {
      endIndex = this.projects.length;
    }
    this.pageProjectsSlice = this.projects.slice(startIndex, endIndex);
  }

  getSortedSignificantProjects(projects: ProjectsModel[]) {
    return projects.filter(p => p.significant).sort();
  }

  getSortedCommonProjects(projects: ProjectsModel[]) {
    return projects.filter(p => !p.significant).sort();
  }

  get isClosedSidenav(){
    return localStorage.getItem('isClosedSidenav') === 'true';
  }
}
