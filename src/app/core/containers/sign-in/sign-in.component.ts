import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';

// actions
import { Authenticate } from './../../actions/users';

// reducers
import { getAuthenticationError, isAuthenticated, isLoading, State } from './../../reducers/users';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnDestroy, OnInit {
  public error: Observable<string>;
  public loading: Observable<boolean>;
  public form: FormGroup;
  private alive = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) { }

  public ngOnInit() {
    // set formGroup
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = this.store.select(getAuthenticationError);
    this.loading = this.store.select(isLoading);
    this.store.select(isAuthenticated)
      .takeWhile(() => this.alive)
      .filter(authenticated => authenticated)
      .subscribe(value => {
        alert('works !!!!')
        //this.store.dispatch(go('/users/my-account'));
      });
  }

  public ngOnDestroy() {
    this.alive = false;
  }

  public home() {
    this.router.navigate(['/']);
  }

  public signUp() {
    this.router.navigate(['/users/sign-up']);
  }

  public submit() {
    // get email and password values
    const email: string = this.form.get('email').value;
    const password: string = this.form.get('password').value;

    // trim values
    email.trim();
    password.trim();

    // set payload
    const payload = {
      email: email,
      password: password
    };

    // dispatch AuthenticationAction and pass in payload
    this.store.dispatch(new Authenticate(payload));
  }
}