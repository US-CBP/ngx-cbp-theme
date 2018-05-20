import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cbp-demo-demo-app-header, demo-demo-app-header',
  templateUrl: './demo-app-header.component.html',
  styleUrls: ['./demo-app-header.component.scss']
})
export class DemoAppHeaderComponent implements OnInit {

  appNavigations = [
      {name: 'Info'},
      {name: 'Findings'},
      {name: 'Attachments'},
      {name: 'Results'},
      {name:  'Some'},
      {name: 'More'},
      {name: 'Items'},
      {name: 'Remarks'},
      {name: 'History'},
      {name: 'Notes'},
      {name: 'Ideas'}];
  constructor() { }

  ngOnInit() {
  }

}
