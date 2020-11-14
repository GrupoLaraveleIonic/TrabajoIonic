import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./components/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina3',
    loadChildren: () => import('./components/pagina3/pagina3.module').then( m => m.Pagina3PageModule)
  },
  {
    path: 'pagina4',
    loadChildren: () => import('./components/pagina4/pagina4.module').then( m => m.Pagina4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
