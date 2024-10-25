import { Routes } from '@angular/router';
// import { TestComponent } from './components/test.component';

export const routes: Routes = [
  // 1. regular route causes no issues
  //   {
  //     path: '',
  //     component: TestComponent,
  //   },

  // 2. lazy route causes AppComponent server content to disappear too late
  {
    path: '',
    loadComponent: () =>
      import('./components/test.component').then((m) => m.TestComponent),
  },
];
