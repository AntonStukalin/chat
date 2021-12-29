import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import * as auth from 'firebase/auth';
import {Router, Routes} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth,
              private router: Router) {
  }

  async loginWithGoogle() {
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      this.router.navigate(['/chat'])
      console.log('success');
      }
    ).catch(err => {
      console.log('err', err);
    })
  }

  async logoutGoogle() {
    await this.fireAuth.signOut();
    this.router.navigate(['/'])
    console.log('logged out');

  }
}
