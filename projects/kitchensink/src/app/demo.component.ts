import {ChangeDetectionStrategy, Component} from '@angular/core';


@Component({
  selector: 'demo-app-root, cbp-demo-app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoAppComponent {

  myFeedbackAction(): void {
    console.log('demo::myFeedbackAction implementation');
  }

  myPreferences(): void {
      console.log('demo::myPreferences implementation');
  }
}


