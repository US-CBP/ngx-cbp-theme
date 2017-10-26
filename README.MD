# ngx-cbp-theme


[![npm version](https://badge.fury.io/js/ngx-cbp-theme.svg)](https://www.npmjs.com/package/ngx-cbp-theme)
[![build Status](https://travis-ci.org/US-CBP/ngx-cbp-theme.svg?branch=master)](https://travis-ci.org/US-CBP/ngx-cbp-theme.svg?branch=master)
[![dependencies Status](https://david-dm.org/us-cbp/ngx-cbp-theme/status.svg)](https://david-dm.org/us-cbp/ngx-cbp-theme)
[![devDependencies Status](https://david-dm.org/us-cbp/ngx-cbp-theme/dev-status.svg)](https://david-dm.org/us-cbp/ngx-cbp-theme?type=dev)


Angular native artifacts for consuming [CBP Theme](https://github.com/US-CBP/cbp-theme) for Angular 4.x applications. 


___
[![Kitchen Sink Demo](https://us-cbp.github.io/ngx-cbp-theme/assets/kitchen-sink-preview.png)](https://us-cbp.github.io/ngx-cbp-theme/assets/kitchen-sink-preview.png)
___


## Goals

* Provides abstraction for CBP Theme so that other Angular CBP applications do not have to repeat this gap-bridging between CBP Theme and Angular Material.
* Deliver styling from CBP Theme to other CBP Angular applications so that CBP Theme can evolve and styling changes are delivered with simple upgrade in most cases.
* Provides for progression from Bootstrap to Material specifications as CBP Theme evolves. (This should cause shrinking of this library.)

## Target Applications

* Apps that must comply with [US CBP Style Guide](https://us-cbp.github.io/cbp-style-guide/) 
* Apps that are using Angular >= 4.x
* Apps that will use Angular Material [Angular/Material](https://github.com/angular/material2)
* Apps that use SCSS. 
 
## Library Development Goals and Guidelines

* Consumption of this library should require minimal setup i.e. most complexity and difficulties must be fought and absorbed in here keeping `angular-cli` spirit.
* Must inherit certain (see styles below) styles from [US-CBP/cbp-theme](https://github.com/US-CBP/cbp-theme) 
* Must not mix any other UI libraries than [Angular/Material](https://github.com/angular/material2) 
* Expose SCSS artifacts.    
* Provide angular native components only when styling overriding is not an option OR consuming a material component requires more effort to comply with CBP Style Guide.
* Provide angular native component ony when [Angular/Material](https://github.com/angular/material2) does not have equivalent component.
* Styles      
  * Styles should be prefixed with `cbp` and `mat` when overriding.
  * Markups should not use any other namespaces than the ones specified.
  * Must expose individual styles for further customization.  


## Getting Started - How To Use

Note: For Windows users we recommend git-bash shell. Also check the node engine version.

Use angular-cli version 1.4.5 
  
* Install [angular-cli](https://cli.angular.io/) globally making sure we use same version as we have in `@angular/cli` inside package.json.
* For new apps follow [angular-cli](https://cli.angular.io/) and create your application with styles = SCSS. Minimal e.g.
  ```bash
  ng new my-app --style scss
  ``` 
* Ensure `polyfills.ts` is correct by following instructions in your `src/polyfills.ts`  to enable all `IE11` and `web-animations-js` polyfills. 
* Ensure that it builds and runs correctly i.e. `ng start` runs fine. 
* Stop any of running processes/scripts against your project and then run:

  ```bash
  $ npm install ngx-cbp-theme --save
  ```

* In your `styles.scss` add
  ```sass
  @import '~ngx-cbp-theme/ngx-cbp-theme';
  ```

* Implement required services:

   
  `ngx-cbp-theme` requires implementation of some services provided by the consuming application since those services are beyond the scope of theme.
  
  Ideally these will be provided by other projects hosted in the enterprise. Please check common framework team or other Angular teams withing CBP.
   
  However for the sake of this exercise we will provide implementation of some of these services (CBPUserService, CBPApplicationsService) before we start our application. 
  
  Since this is just a guide we will create my-user.service (to fake User) and my-applications.service (to fake basic set of applications for header menu). 
  
  Lets go ahead and create those using `angular-cli`.
    
  ```bash
  ng g s my-user
  ng g s my-applications
  ```
  
  Modify `MyUserService` to implement `CBPUserService` from `ngx-cbp-theme`. Make sure we implement all the abstract methods.
  
  Similarly `MyApplicationsService` must implement `CBPApplicationsService` and its methods.
   
  
  Both class declaration signature looks as below (implementation omitted for brevity).
  
 
  ```typescript
  // inside my-user-service.ts
  import {CBPUserService, CBPUser} from 'ngx-cbp-theme';
  @Injectable()
  export class MyUserService implements CBPUserService { 
  ...
  }
  // inside my-applications-service.ts
  
  import {CBPApplicationsService} from 'ngx-cbp-theme';
  @Injectable()
  export class MyApplicationsService implements CBPApplicationsService { 
  ...
  ```
    
* Import following minimal modules in your `AppModule` (app.module.ts):   
  
    ```typescript
    import {
        CBPRootModule, 
        CBPHeaderModule, 
        CBPAppHeaderModule,     // this is optional 
        CBP_USER_SERVICE,           // must be provided to fetch CBP user logged in to display user name on CBP Header
        CBP_APPLICATIONS_SERVICE    // must be provided to get CBP applications (recent) for Applications menu on the CBP Header
    } from 'ngx-cbp-theme' ;
    ```
  
  Import in `@NgModule`
  
  ```typescript
    imports: [
        BrowserModule,
        CBPRootModule,
        CBPAppHeaderModule
      ],
  ```
  
  Provide implementation for these services like `USER_SERVICE` and `APPLICATIONS_SERVICE` by implementing respective interfaces and declare providers in AppModule's @NgModule as follows:-
  ```typescript
    providers: [
      { provide: CBP_USER_SERVICE,          useClass: MyUserService },
      { provide: CBP_APPLICATIONS_SERVICE,  useClass: MyApplicationsService }
    ]
  ```
 
 Full code is available here in another github repo [my-app](https://github.com/yogeshgadge/my-app). Checkout the progression by loking at the commit history as these steps. 

* Markup Requirement

Your `app.component.html` should be changed to following minimal structure:-

```angular2html
<cbp-root layout="'fluid'">
  <cbp-header></cbp-header>
  <cbp-app-header>
    <cbp-app-title>
      <h1 class="app-title"> Product<small> create</small></h1>
    </cbp-app-title>
  </cbp-app-header>
  <div class="app-content">
    <p>My markup here...</p>
  </div>
</cbp-root>
```  



## Contributing
We welcome contributions, please see our [Contribution Policy](https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.MD)

To get started developing, see contributing readme [here](./CONTRIBUTING.MD).

## License
Please refer to [CBP Open Source License](https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.MD)


