import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-original-name',
  templateUrl: './original-name.component.html',
  styleUrls: ['./original-name.component.css']
})
export class OriginalNameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
