import {Injectable} from '@angular/core';
import {CBPFeedbackService} from '../feedback/feedback.service';





@Injectable()
export class MockFeedbackService implements CBPFeedbackService {
    handleFeedback(): void {
        console.log('mock feedback clicked');
    }


    onFeedbackClose(done: () => void): void {
        if (done) {
            done();
        }
    }
}
