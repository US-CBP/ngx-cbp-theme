import {trigger, state, style, animate, transition, AnimationTriggerMetadata} from '@angular/animations';

export const HEADER_SHRINK_TRANSITION = '250ms cubic-bezier(0.4,0.0,0.2,1)';

export class CBPScrollShrinkAnimator {

    static createScrollShrinkTrigger(triggerName: string, initialTop: string, upTop: string): AnimationTriggerMetadata {
        return trigger(triggerName, [
            state('initial', style({top: initialTop})),
            state('up', style({top: upTop})),
            transition('initial => up, up => initial',
                animate(HEADER_SHRINK_TRANSITION))
        ]);
    }

}