import { Component, Input, OnInit } from '@angular/core';
import { ProjectsModel } from 'src/app/core/models/projects.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: ProjectsModel | any;

  constructor() { }

  ngOnInit(): void {
  }

}
