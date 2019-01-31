import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'templates',
        children: [
          {
            path: '',
            loadChildren: '../templates/templates.module#TemplatesPageModule'
          }
        ]
      },
      {
        path: 'actions',
        children: [
          {
            path: '',
            loadChildren: '../actions/actions.module#ActionsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/templates',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
