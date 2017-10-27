import { Component, OnInit } from '@angular/core';
import { Directive, Input } from '@angular/core';

@Component({
  selector: 'app-solic',
  templateUrl: './solic.component.html',
  styleUrls: ['./solic.component.css']
})
export class SolicComponent implements OnInit {
  @Input()
  isCollapsed:boolean
  constructor() {
    this.isCollapsed=true;
   }

  ngOnInit() {
  }


}
