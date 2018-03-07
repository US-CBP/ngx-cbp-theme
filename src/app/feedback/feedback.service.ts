import {InjectionToken} from '@angular/core';

/**
 * Feedback service implementation is beyond the scope of this library.
 * We recommend developing an independent module that implements the following service.
 */
export abstract class CBPFeedbackService {
    /**
     * This will be called when the Feedback button is clicked.
     * While this is quite an open interface to implement developers are expected to open a dialog and perform the operation.
     */
    abstract handleFeedback(): void;

    /**
     * When the task is done.
     */
    abstract onFeedbackClose(done: () => void): void;
}

export const CBP_FEEDBACK_SERVICE = new InjectionToken<CBPFeedbackService>('cbp-feedback-service');
