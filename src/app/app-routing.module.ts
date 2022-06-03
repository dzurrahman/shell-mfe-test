import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'angular12',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'angular12',
        exposedModule: './HomeModule',
      }).then((m) => {
        return m.HomeModule;
      }),
  },
  // {
  //   path: 'angular12',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './Module'
  //   }).then((m) => {
  //     return m.AppModule;
  //   })
  // },
  {
    path: 'angular13',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://dzurrahman.github.io/mfe-roki-test/remoteEntry.js',
        exposedModule: './Angular13Module',
      }).then((m) => {
        return m.Angular13Module;
      }),
  },
  {
    path: 'angular13/home/:data',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://dzurrahman.github.io/mfe-roki-test/remoteEntry.js',
        exposedModule: './Angular13Module',
      }).then((m) => {
        return m.Angular13Module;
      }),
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //       exposedModule: './Angular13Module',
  //     }).then((m) => {
  //       return m.Angular13Module;
  //     }),
  // },
  {
    path: 'angular14',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => {
        return m.AppModule;
      }),
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
