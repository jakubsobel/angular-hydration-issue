# Angular Hydration Issue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli), version 18.2.10.

## Development Server

Run `ng serve` to start a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

## Reproducing the Issue

In Chrome DevTools, enable CPU throttling and network throttling to slow down hydration and lazy chunk fetching, allowing you to better observe the issue.

Refresh the page. You should notice that, for the `@if{}@else{}` template, both the server and client HTML are visible at the same time for a brief period. This behavior does not occur with `*ngIf;else`, which renders correctly.

In `app.routes.ts`, comment out the lazy route and uncomment the regular route. Observe that both `@if{}@else{}` and `*ngIf;else` now work correctly.