import {
    Component, HostBinding, Inject, OnDestroy, OnInit,
    ViewEncapsulation
} from '@angular/core';

import {CBP_FEEDBACK_SERVICE, CBPFeedbackService} from '../feedback.service';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

export const HEADER_SHRINK_TRANSITION = '250ms cubic-bezier(0.4,0.0,0.2,1)';

@Component({
  selector: 'cbp-header',
  moduleId: module.id,
  templateUrl: './cbp-header.component.html',
  styleUrls: ['./cbp-header.component.scss'],
  encapsulation: ViewEncapsulation.None

})
@HostBinding()
export class CBPHeaderComponent implements OnInit , OnDestroy {


  isToolbarExpanded: boolean;
  private mediaSubscription: Subscription;

  @Inject(CBP_FEEDBACK_SERVICE)
  feedbackService: CBPFeedbackService;

  constructor(
      private media: ObservableMedia) {
      if (this.feedbackService) {
          this.feedbackService.onFeedbackClose(this.feedbackDone);
      }
  };



  ngOnInit() {
    this.mediaSubscription = this.media.subscribe(
      (change: MediaChange) => {
          if ( change && change.mqAlias !== 'xs') {
              this.isToolbarExpanded = false;
          }
      }
    );
  }

  ngOnDestroy() {
      this.mediaSubscription.unsubscribe();
  }


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
