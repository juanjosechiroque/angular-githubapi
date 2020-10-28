import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommitService {
  
  _url = "https://api.github.com/repos/juanjosechiroque/angular-githubapi/commits";
  
  constructor(
    private http: HttpClient
  ) { 
    
  }
  
  getCommits() {
  
    return this.http.get(this._url);
    
  }
  
}
