import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../app/pages/manager/manager.module').then( m => m.ManagerPageModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/pages/screen/screen.module').then( m => m.ScreenPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
