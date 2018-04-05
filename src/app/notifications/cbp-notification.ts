import {TemplateRef} from '@angular/core';
import {Portal} from '@angular/cdk/portal';

export class CBPNotification {

    type: 'success' | 'danger' | 'warn' | 'info' = 'info';
    message?: string;
    content?: TemplateRef<any>;
    contentPortal?: Portal<any>;
    actions?: TemplateRef<any>;
    
}
