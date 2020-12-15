import { Component, OnInit } from '@angular/core';
import {ProjectsService} from './projects.service';
import {Project} from './projects.models';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // TODO: akitajs
  projectList$: Observable<Project[]> = this.projectsService.getProjects();

  constructor(
    private projectsService: ProjectsService,
  ) { }

  ngOnInit(): void {
  }

}


