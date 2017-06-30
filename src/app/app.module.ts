import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdTabsModule} from '@angular/material';

import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'tabs', component: TabsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MdTabsModule,
    BrowserAnimationsModule
  ],
  exports: [
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
