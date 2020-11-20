import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./components/pagina2/pagina2.module').then( m => m.Pagina2PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pagina3',
    loadChildren: () => import('./components/pagina3/pagina3.module').then( m => m.Pagina3PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pagina4',
    loadChildren: () => import('./components/pagina4/pagina4.module').then( m => m.Pagina4PageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
