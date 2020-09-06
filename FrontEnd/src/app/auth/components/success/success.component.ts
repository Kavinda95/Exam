import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  err='';
  data :any;
  constructor(private http: HttpClient) { 
    this.http.get('/api/users/getAllUserIfLoggedIn').subscribe(
res=>{this.data=res;},
err=>this.err='Not authorized'


    );

  }

  ngOnInit(): void {
  }
  

}
