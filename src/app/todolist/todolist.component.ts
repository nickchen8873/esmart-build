import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KernelTopService } from '../shared/service/kernel-top.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  constructor(private router: Router, public _top: KernelTopService) {}

  ngOnInit(): void {}

  // goto140() {
  //   this.router.navigate(['st140t']);
  // }
}
