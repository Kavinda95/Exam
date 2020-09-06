import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import {AuthentificationService} from '../../../services/authentification.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth :AuthentificationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.auth.login(f.value).subscribe(
      () => {
          console.log("User is logged in");
          this.router.navigateByUrl('/success');
      }
  ) }

}
