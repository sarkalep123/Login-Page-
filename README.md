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

# style.css


body{
margin: 0;
padding: 0;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.heading{
background: linear-gradient(135deg, #318aff,#000000);
padding: 10px 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
color:yellow;
}
.loginsignup-container{
max-width: 500px;
margin: 30px auto 10px auto;
padding: 40px;
background-color: white;
border-radius: 10px;
box-shadow: 0 0 40px rgba(0,0,0,0.1);

}
.loginsignup-container h2{
color: #318aff;
text-align: center;
margin-bottom: 20px;
font-family: fantasy;
font-size: 35px;
margin-top: 0px;

}

.form-group{
margin-bottom: 20px;
}

.form-group input {
outline: none;
width: 100%;
padding: 15px 0px 10px 5px;
border-radius: 6px;
border: 1px solid #318aff;
background-color: #f5f5f5;
}
button{
width: 100%;
padding: 15px;
border: none;
border-radius:6px;
color: white;
font-size: 25px;
background: linear-gradient(135deg, #318aff,#000000);
transition: 0.5s ease;

}
button:hover{
background: linear-gradient(135deg,#000000 #318aff);
}
p{
margin-top: 8px;
text-align: center;
cursor: pointer;
color:black;

}
.highlighted:hover{
text-decoration: underline;
color: #318aff;

}

# App.Router.ts

import { loginsignup } from "./pages/login-signup/login-signup";
import { Layout } from "./pages/layout/layout";
import { Dashboard } from "./pages/dashboard/dashboard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "loginsignup",
    pathMatch: "full",
  },
  {
    path: "loginsignup",
    component: loginsignup,
  },

  {
    path: "",
    component: Layout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
    ],
  },
];







