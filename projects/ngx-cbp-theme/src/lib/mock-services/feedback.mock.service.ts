import {Injectable} from '@angular/core';
import {CBPFeedbackService} from '../feedback/feedback.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';



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
