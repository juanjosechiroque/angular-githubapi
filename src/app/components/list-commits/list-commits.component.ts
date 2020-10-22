import { Component } from "@angular/core";

@Component({
  selector: "list-commits",
  template: `<h1>List Commits<h1>`  
})

export class ListCommits {
  
  constructor(){
    console.log("load");
  }
  
}