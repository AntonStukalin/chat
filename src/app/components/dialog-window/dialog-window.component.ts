import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./scss/dialog-window.component.scss']
})
export class DialogWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
