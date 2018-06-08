import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCardModule  } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { CoreModule } from './core/core.module';
// firebase modules
import { AngularFireAuthModule } from 'angularfire2/auth';
const appRoutes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'editor-page', component: EditorPageComponent},
  {path: 'settings-page', component: SettingsPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    EditorPageComponent,
    SettingsPageComponent,
    NavBarComponent,
    UserLoginComponent,
    UserProfileComponent,
  ],

  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
