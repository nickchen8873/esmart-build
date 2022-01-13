import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goto140() {
    this.router.navigate(['st140t']);
  }
}
