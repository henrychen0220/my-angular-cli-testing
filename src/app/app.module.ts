import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'directory', component: DirectoryComponent}
      // {path:'directory/:ninja', component: DirectoryComponent}
    ])
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
