import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'reset-pwd', loadChildren: './reset-pwd/reset-pwd.module#ResetPwdPageModule' },
  { path: 'signup1', loadChildren: './signup1/signup1.module#Signup1PageModule' },
  { path: 'signup2', loadChildren: './signup2/signup2.module#Signup2PageModule' },
  { path: 'signup3', loadChildren: './signup3/signup3.module#Signup3PageModule' },
  { path: 'signup4', loadChildren: './signup4/signup4.module#Signup4PageModule' },
  { path: 'signup5', loadChildren: './signup5/signup5.module#Signup5PageModule' },
  { path: 'edit-user', loadChildren: './edit-user/edit-user.module#EditUserPageModule' },
  { path: 'templates', loadChildren: './templates/templates.module#TemplatesPageModule' },
  { path: 'actions', loadChildren: './actions/actions.module#ActionsPageModule' },
  { path: 'answer-type', loadChildren: './answer-type/answer-type.module#AnswerTypePageModule' },
  { path: 'available-form', loadChildren: './available-form/available-form.module#AvailableFormPageModule' },
  { path: 'canvas-draw', loadChildren: './canvas-draw/canvas-draw.module#CanvasDrawPageModule' },
  { path: 'draw', loadChildren: './draw/draw.module#DrawPageModule' },
  { path: 'edit-question', loadChildren: './edit-question/edit-question.module#EditQuestionPageModule' },
  { path: 'edit-template', loadChildren: './edit-template/edit-template.module#EditTemplatePageModule' },
  { path: 'fill-form', loadChildren: './fill-form/fill-form.module#FillFormPageModule' },
  { path: 'show-grid', loadChildren: './show-grid/show-grid.module#ShowGridPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
