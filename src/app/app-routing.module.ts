// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
// import { HeaderComponent } from './header/header.component';
// import { ContentComponent } from './content/content.component';
// import { UploadComponent } from './upload/upload.component';
// import { contentDetailComponent } from './content-details/content-details.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, 
//   { path: 'login', component: LoginComponent },
//   {path: 'header',
//   component: HeaderComponent,
//   children: [
//     { path: '', redirectTo: 'content', pathMatch: 'full' }, 
//     { path: 'content', component: ContentComponent },
//     { path: 'image-detail/:id', component: contentDetailComponent } 
//   ]
// },
// {path:'upload', component:UploadComponent}
//  ]

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { UploadComponent } from './upload/upload.component';
import { ContentDetailComponent } from './content-details/content-details.component'; // Updated import
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/authguard';
const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, 
  { path: 'auth', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  {
    path: 'header',
    component: HeaderComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', redirectTo: 'content', pathMatch: 'full' },
      { path: 'content', component: ContentComponent },
      { path: 'image-detail/:id', component: ContentDetailComponent } 
    ]
  },
  { path: 'upload', component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

