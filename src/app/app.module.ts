import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgstModule} from './ngst/ngst.module';
import { DemoComponent } from './demo/demo.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    NgstModule
  ],
  exports: [
  ],
  entryComponents: [DemoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
