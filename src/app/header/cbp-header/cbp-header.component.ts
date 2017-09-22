import {
    Component, Inject,
    ViewEncapsulation
} from '@angular/core';

import {CBP_FEEDBACK_SERVICE, CBPFeedbackService} from '../feedback.service';



@Component({
  selector: 'cbp-header',
  moduleId: module.id,
  templateUrl: './cbp-header.component.html',
  styleUrls: ['./cbp-header.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CBPHeaderComponent  {

  @Inject(CBP_FEEDBACK_SERVICE)
  feedbackService: CBPFeedbackService;

  constructor() {
      if (this.feedbackService) {
          this.feedbackService.onFeedbackClose(this.feedbackDone);
      }
  };

  handleFeedback(): void {
    if (this.feedbackService) {
        this.feedbackService.handleFeedback();
    }
  }

  /**
   * Not sure what we do here but we have it.
   */
  private feedbackDone(): void {}
}
