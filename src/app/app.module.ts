import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

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
    NavBarComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
