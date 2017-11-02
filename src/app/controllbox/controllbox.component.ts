import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controllbox',
  templateUrl: './controllbox.component.html',
  styleUrls: ['./controllbox.component.css']
})
export class ControllboxComponent implements OnInit {
  text = "Detta är en lång mening";

  constructor() {
    this.text = "Nånting annat";
   }

  ngOnInit() {
  }

}
