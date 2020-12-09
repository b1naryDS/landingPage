import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // TODO: dohvatiti podatke, akitajs
  projectList: Project[] = [
    {name: 'prvi', link: 'github.prvi', img: 'ruta/do/slike1'},
    {name: 'drugi', link: 'github.drugi', img: 'ruta/do/slike2'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Project {
  name: string;
  link: string;
  img: string;
}
