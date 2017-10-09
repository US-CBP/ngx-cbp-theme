# Installation

Ensure angular-cli is as per [angular-cli](https://cli.angular.io/) which includes global npm install.
Clone this repository.

Install all dependencies including `peerDependencies`. (Useful for installing peers https://www.npmjs.com/package/npm-install-peers) 


# Build

Produces consumable artifacts as per [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview)


```bash
  npm run build
 ```

# Organization

This project is made up of 2 applications

Lib -> This is src/app

Demo -> This is the demo app.

# Demo

This is for development of components to quickly see the components in works.
Based on angular-cli.  

# Why Lib is not angular-cli ?

Only the Demo app is based on angular-cli however the lib uses gulp and angular-cli both. angular-cli is used to quickly scaffolding new components etc.
However in order to overcome meet the Angular package Format i.e. to make this consumable we make direct use of Angular Compilers and other utilities which needs more choreography than simple package.json can handle hence gulp is also used.
  

In short angular-cli does not support a library project that produces build artifacts to be consumed by other Angular applications due sot shortcomings of webpack.

Huge discussion threads here:- 

[[Feature] Create boilerplate for library](https://github.com/angular/angular-cli/issues/1692)  
[[RFC] Library Support and Boilerplate Comment Thread](https://github.com/angular/angular-cli/issues/6510) 


# bootstrap vs. material

We have started with material to customize it for bootstrap wherever it is needed. 
This is as opposed to starting with bootstrap and customizing it with with Material wherever needed.

This was done for following reasons :-  

* cbp-theme will eventually move to Material
* It is easier to scale down and get rid of bootstrap workarounds once all cbp-theme components are switched to Material
* It means less technical debt for consumer applications given the forward direction towards Material
* For bootstrap we would start with `ngx-bootstrap` vs. `angular material2` and the later is more clean and better library.   
* material components are much nicer than bootstrap :) 
* cbp-theme forms and some other components are Material themed which will form the bulk of consumer applications.

For detailed discussion refer to [ bootstrap vs. material - issue #11](https://github.com/US-CBP/ngx-cbp-theme/issues/11)

# References

https://github.com/filipesilva/angular-quickstart-lib
https://www.npmjs.com/package/generator-angular-library

