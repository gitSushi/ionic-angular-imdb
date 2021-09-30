import { Component, OnInit } from '@angular/core';
import { OauthService } from '../service/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: OauthService) { }

  ngOnInit() { }

  onLogin() {
    this.authService.login();
  }

}
