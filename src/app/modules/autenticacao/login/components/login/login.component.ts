import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../style.autenticacao.css','./login.component.css']
})
export class LoginComponent implements OnInit {

  login: boolean
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.login = false
  }

  logar(){
    this.login = true
    this.router.navigate(['/home'])
  }

}
