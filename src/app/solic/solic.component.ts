import { Component, OnInit } from '@angular/core';
import { Directive, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solic',
  templateUrl: './solic.component.html',
  styleUrls: ['./solic.component.css']
})
export class SolicComponent implements OnInit {
  public href: string = "";
  constructor(private router: Router) {

   }

   ngOnInit() {
  
    
}


}
