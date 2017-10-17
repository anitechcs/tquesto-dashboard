# Tquesto Dashboard [![Build Status](https://travis-ci.org/anitechcs/tquesto-dashboard.svg?branch=master)](https://travis-ci.org/anitechcs/tquesto-dashboard)

> TQuesto Dashboard Application

![](https://github.com/anitechcs/tquesto-dashboard/blob/master/src/assets/imgs/dark-1.png)

![](https://github.com/anitechcs/tquesto-dashboard/blob/master/src/assets/imgs/light-1.png)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build --prod --build-optimizer` to build the production build. 
The build artifacts will be stored in the `dist/` directory. 


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Build docker image

```
$ docker build -t tquesto-dashboard . 
```

## Run the container

```
$ docker run -d -p 8080:80 tquesto-dashboard
```

The app will be available at http://localhost:8080

You can easily tweak the nginx config in ```nginx/default.conf```

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
