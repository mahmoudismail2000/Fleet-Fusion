import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, withHashLocation, withViewTransitions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'',
    loadComponent:()=>import('./shared/components/splash/splash.component').then(m=>m.SplashComponent)

  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'fleet',
    loadChildren: () => import('./modules/fleet/fleet.module').then( m => m.FleetModule)
  },
  {
    path: 'intro',
    loadComponent:()=>import('./shared/components/intro/intro.component').then(m=>m.IntroComponent)
  },
  {
    path: 'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
