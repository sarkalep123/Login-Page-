# Login-Page-

This is my third repo

<-- Login-signup Html Code -->

<div class="heading">
    <h2>Login / Signup with Local Storage</h2>
</div>
<div class="loginsignup-container">
<!-- REGISTER FORM -->
<form *ngIf="activeForm === 'register'">
    <h2>REGISTER</h2>
    <div class="form-group">
    <input type="text" name="name" ([(ngModel)]="registerObj.name") placeholder="Name">
    </div>
    <div class="form-group">
    <input type="email" name="email" ([(ngModel)]="registerObj.email") placeholder="Email">
    </div>
    <div class="form-group">
    <input type="password" name="password" ([(ngModel)]="registerObj.password") placeholder="Password">
    </div>
    <button type="submit" (click)="registerForm()">Register</button>

<p (click)="toggleForm('login')">
        Already have an account ? <span class="highlighted">LOGIN</span>
    </p>

</form>

<!-- LOGIN FORM -->
 <form *ngIf="activeForm === 'login'">
    <h2>LOGIN</h2>
    
<div class="form-group">
    <input type="email" name="email" [ngModel] ="loginObj.email" placeholder="Email">
    </div>
    <div class="form-group">
    <input type="password" name="password" [ngModel] ="loginObj.password" placeholder="Password">
    </div>
    <button type="submit"(click)="loginForm()">Login</button>
    <p (click)="toggleForm('register')">
        Don't have an account ? <span class="highlighted">REGISTER</span>
    </p>
</form>
</div>

# login-signup.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loginsignup } from './login-signup';

describe('LoginSingup', () => {
  let component:loginsignup;
  let fixture: ComponentFixture<loginsignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [loginsignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(loginsignup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});






