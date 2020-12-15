import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Project} from './projects.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of([
      {name: 'prvi', link: 'github.prvi', img: 'ruta/do/slike1'},
      {name: 'drugi', link: 'github.drugi', img: 'ruta/do/slike2'},
    ]);
  }
}
