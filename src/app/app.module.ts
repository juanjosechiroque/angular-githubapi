import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListCommits } from "./components/list-commits/list-commits.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [    
    ListCommits
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ListCommits]
})
export class AppModule { }
