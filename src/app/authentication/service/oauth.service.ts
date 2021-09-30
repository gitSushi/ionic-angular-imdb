import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(private http: HttpClient) { }

  login() {
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=1067581357565-fvqu8tbin3j2jhlfkp947o2gvtv4h51p.apps.googleusercontent.com&redirect_uri=http://localhost:8100/home&response_type=token&scope=https://www.googleapis.com/auth/userinfo.profile";
  }

  getUserInfo(token) {
    return this.http.get("https://openidconnect.googleapis.com/v1/userinfo", {
      headers: {
        "Authorization": "Bearer " + token,
      }
    })
  }

  saveToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  isAuth() {
    return !this.getToken();
  }

  saveUsername(username: string) {
    localStorage.setItem("profile", username);
  }

  getUsername() {
    const username = localStorage.getItem("profile");
    return username;
  }
}
