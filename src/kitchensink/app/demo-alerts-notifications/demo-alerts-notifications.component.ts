import {Component,  OnInit} from '@angular/core';

@Component({
  selector: 'demo-alerts-notifications, cbp-demo-alerts-notifications',
  templateUrl: './demo-alerts-notifications.component.html',
  styleUrls: ['./demo-alerts-notifications.component.scss']
})
export class DemoAlertsNotificationsComponent implements OnInit {

  showing = false;
  constructor() { }

  ngOnInit() {
  }

  toggleToasts() {
      this.showing = ! this.showing;
  }

  alert() {

  }
}
