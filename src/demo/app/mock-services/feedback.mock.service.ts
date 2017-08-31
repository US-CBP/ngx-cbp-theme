import {Injectable} from '@angular/core';
import {CBPFeedbackService} from '../../../app/header/feedback.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';



@Injectable()
export class DemoFeedbackService implements CBPFeedbackService {
    handleFeedback(): void {
        console.log('mock feedback clicked');
    }


    onFeedbackClose(done: () => void): void {
        if (done) {
            done();
        }
    }
}
