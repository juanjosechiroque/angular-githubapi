import { Component } from "@angular/core";
import { CommitService } from "../../services/commit.service";

@Component({
  selector: "list-commits",
  templateUrl: "./list-commits.component.html"  
})

export class ListCommits {
  
  public listCommits: Array<any> = [];
  
  constructor(
    private commitService: CommitService
  ){
      
    this.commitService.getCommits().subscribe((r: any) => {      
      this.listCommits = r;
      console.log(this.listCommits);
      console.log(this.listCommits[0]);
    });
      
  }
  
}







