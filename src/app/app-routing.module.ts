import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthguardGuard } from './authentication/service/authguard.guard';

const routes: Routes = [
  {
    path: 'login',
    // loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [
      AuthguardGuard
    ]
  },
  {
    path: 'list',
    loadChildren: () => import('./movies/list/list.module').then(m => m.ListPageModule),
    canActivate: [
      AuthguardGuard
    ]
  },
  {
    path: 'detail/:movieId',
    loadChildren: () => import('./movies/detail/detail.module').then(m => m.DetailPageModule),
    canActivate: [
      AuthguardGuard
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
