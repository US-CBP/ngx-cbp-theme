import {Component, Inject, OnInit, Optional} from '@angular/core';
import {CBP_FEEDBACK_SERVICE, CBPFeedbackService} from './feedback.service';

@Component({
  selector: 'cbp-feedback-link',
  templateUrl: './feedback-link.component.html',
  styleUrls: ['./feedback-link.component.scss']
})
export class CBPFeedbackLinkComponent implements OnInit {

  constructor(@Optional() @Inject(CBP_FEEDBACK_SERVICE) private feedbackService: CBPFeedbackService) {
    if (this.feedbackService) {
      this.feedbackService.onFeedbackClose(this.feedbackDone);
    }
  }

  ngOnInit() {
  }

  handleFeedback(): void {
    if (this.feedbackService) {
      this.feedbackService.handleFeedback();
    } else {
      console.log('Provide CBP_FEEDBACK_SERVICE to execute feedback service');
    }
  }

  private feedbackDone(): void {
  }


}
