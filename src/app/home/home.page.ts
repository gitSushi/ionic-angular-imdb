import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../authentication/models/user';

import { OauthService } from '../authentication/service/oauth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [OauthService]
})
export class HomePage {

  username: string;

  constructor(private authService: OauthService, private route: ActivatedRoute) { }

  ngOnInit() {

    if (this.authService.isAuth()) {
      let t = this.route.snapshot.fragment;
      const token = t.slice(t.indexOf("=") + 1, t.indexOf("&"));

      this.authService.saveToken(token);

      this.authService.getUserInfo(this.authService.getToken()).subscribe((data: User) => {
        console.log(data);
        this.authService.saveUsername(data.name);
        this.username = data.name;
      });
    } else {
      this.username = this.authService.getUsername();
    }
  }
}
