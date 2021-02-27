import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'e1',
    loadChildren: () => import('./e1/e1.module').then( m => m.E1PageModule)
  },
  {
    path: 'e2',
    loadChildren: () => import('./e2/e2.module').then( m => m.E2PageModule)
  },
  {
    path: 'e3',
    loadChildren: () => import('./e3/e3.module').then( m => m.E3PageModule)
  },
  {
    path: 'e4',
    loadChildren: () => import('./e4/e4.module').then( m => m.E4PageModule)
  },
  {
    path: 'e5',
    loadChildren: () => import('./e5/e5.module').then( m => m.E5PageModule)
  },
  {
    path: 'popovercomponent',
    loadChildren: () => import('./popovercomponent/popovercomponent.module').then( m => m.PopovercomponentPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
