import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'cbp-demo-demo-app-header, demo-demo-app-header',
  templateUrl: './demo-app-header.component.html',
  styleUrls: ['./demo-app-header.component.scss']
})
export class DemoAppHeaderComponent implements OnInit {

  appNavigations = [{
      name: 'Dashboard',
      link: '/dashboard'
    },
    {
      name: 'Manifests',
      link: '/manifest'
    },
    {
      name: 'Bills of Lading',
      link: '/bols'
    }
  ];

  companyName = "Nicholas Trading Company";
  
  constructor() {}

  ngOnInit() {}

}
