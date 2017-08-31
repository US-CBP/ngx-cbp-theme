# ngx-cbp-theme

Angular native artifacts for consuming [CBP Theme](https://github.com/US-CBP/cbp-theme) for Angular 4.x applications. 


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
  @import '~/app/ngx-cbp-theme';
  ```

* Import following minimal modules in your `AppModule`:
  
  ```typescript
  import {
      CBPRootModule, 
      CBPHeaderModule, 
      CBPAppHeaderModule,     // this is optional 
      USER_SERVICE,           // must be provided to fetch CBP user logged in to display user name on CBP Header
      APPLICATIONS_SERVICE    // must be provided to get CBP applications (recent) for Applications menu on the CBP Header
  } from 'ngx-cbp-theme' ;
  ```

  Provide implementation for these services like `USER_SERVICE` and `APPLICATIONS_SERVICE` by implementing respective interfaces and declare providers in AppModule's @NgModule as follows:-
  ```typescript
    providers: [
      { provide: USER_SERVICE,          useClass: MyUserService },
      { provide: APPLICATIONS_SERVICE,  useClass: MyApplicationsService }]
  ```
  
* Markup Requirement

Your `app.component.html` would have:-

```angular2html
<cbp-root layout="fluid">
  <cbp-header></cbp-header>
  <cbp-app-header>
    <h1 class="app-title">App Header<small>Kitchensink</small></h1>
  </cbp-app-header>
  <div class="app-content">
        <!-- Your markup here -->
  </div>
</cbp-root>
```  



## Contributing
We welcome contributions, please see our [Contribution Policy](https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.md)

To get started developing, see contributing readme [here](./CONTRIBUTING.md).

## License
Please refer to [CBP Open Source License](https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.md)


