import { Component, OnInit } from '@angular/core';
import {TranslocoDirective} from "@jsverse/transloco";

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [
    TranslocoDirective
  ],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
