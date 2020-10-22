import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListCommits } from "./components/list-commits/list-commits.component";

@NgModule({
  declarations: [    
    ListCommits
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ListCommits]
})
export class AppModule { }
