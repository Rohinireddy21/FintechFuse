import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isUppercasePresent(password: string): boolean {
    return /[A-Z]/.test(password);
  }
  isLowercasePresent(password: string): boolean {
    return /[a-z]/.test(password);
  }

  isDigitPresent(password: string): boolean {
    return /[0-9]/.test(password);
  }

  isSpecialCharacterPresent(password: string): boolean {
    return /[@$!%*?&]/.test(password);
  }
  
  constructor(private router: Router) { }
  submit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill in all the fields.');
    } else {
      alert('Registered Successfully!!!');
      this.router.navigate(['/login']);
    }
  }
}
