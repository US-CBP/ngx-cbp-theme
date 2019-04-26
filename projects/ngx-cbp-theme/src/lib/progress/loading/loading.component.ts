import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cbp-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class CBPLoadingComponent implements OnInit {

  @Input() loadingText = 'Loading ...';

  constructor() {
  }

  ngOnInit() {
  }

}
