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
      {name: 'prvi', link: 'https://github.com/b1naryDS/landingPage', img: 'ruta/do/slike1'},
      {name: 'drugi', link: 'https://github.com/b1naryDS/landingPage', img: 'ruta/do/slike2'},
    ]);
  }
}
