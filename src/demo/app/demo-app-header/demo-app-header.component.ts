import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-demo-app-header',
  templateUrl: './demo-app-header.component.html',
  styleUrls: ['./demo-app-header.component.scss']
})
export class DemoAppHeaderComponent implements OnInit {

  appNavigations = ['Info', 'Findings', 'Attachments', 'Results', 'Some', 'More', 'Items', 'Remarks', 'History', 'Notes','Ideas'];
  constructor() { }

  ngOnInit() {
  }

}
