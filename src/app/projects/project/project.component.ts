// input type inffered tslint warning fix
/* tslint:disable:no-inferrable-types */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() name: string = '';

  @Input() link: string = '';

  @Input() img: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  goTo(link: string): void {
    window.location.href = link;
  }

}
