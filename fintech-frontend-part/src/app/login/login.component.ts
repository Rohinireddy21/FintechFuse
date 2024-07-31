import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: { username: string, password: string }[] = [
    { username: 'Siri Chikka', password: 'Siri@1127' },
    { username: 'Sreelekha', password: 'Sreelekha@27' },
    // Add more credentials as needed
  ];
  invalidCredentials: boolean = false;
  showRequiredError: boolean = false;

  constructor(private router: Router) { }

  submit(form: NgForm) {
    if (form.invalid) {
      // Display required fields error message
      this.showRequiredError = true;
      return;
    }
    // Check user credentials against predefined credentials array
    const username = form.value.username;
    const password = form.value.password;

    const isValidCredentials = this.credentials.some(credential => {
      return credential.username === username && credential.password === password;
    });

    if (isValidCredentials) {
      // Redirect to finances page if credentials are valid
      this.router.navigate(['/finances']);
    } else {
      // Display bad credentials message if credentials are invalid
      this.invalidCredentials = true;
    }
  }
  cancel()
  {
    this.router.navigate(['/home']);
  }
}
