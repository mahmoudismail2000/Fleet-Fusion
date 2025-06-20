import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, withHashLocation, withViewTransitions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: ()=>{
      return localStorage.getItem('skip')=='skip'?'home':'splash';
    },
    pathMatch: 'full'
  },
  {
    path:'splash',
    loadComponent:()=>import('./shared/components/splash/splash.component').then(m=>m.SplashComponent)

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
    path: 'booking',
    loadChildren: () => import('./modules/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'fleet',
    loadChildren: () => import('./modules/fleet/fleet.module').then( m => m.FleetPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'branches',
    loadChildren: () => import('./modules/branches/branches.module').then( m => m.BranchesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
