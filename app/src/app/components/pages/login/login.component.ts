import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  submitted = false;

  constructor(private service: LoginService, private router: Router) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        this.submitted = true;
        // alert(JSON.stringify(this.loginForm.value));
        this.service.login(this.loginForm.value).pipe(
          tap({
            next: res => {
              localStorage.setItem('Token', `${res}`)
              this.router.navigate(['home'])
            },
            error: error => console.error(error)
          })
        ).subscribe()
    }
}
