// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './alter.service'; // Adjust the path as needed
import { RegisterService } from './register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  get fullName() {
    return this.registrationForm.get('fullName');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  // Custom validator for password match
  passwordMatchValidator(control: FormGroup): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value !== confirmPassword.value
      ? { 'passwordMismatch': true }
      : null;
  }

  register(): void {
    // Mark all form controls as touched to trigger validation messages
    this.registrationForm.markAllAsTouched();

    // Validate form data
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      this.registerService.register(userData).subscribe((success) => {
        if (success) {
          // Registration successful, navigate or perform other actions
        } else {
          // Handle unsuccessful registration
          this.alertService.error('Registration failed. Please check your credentials.');
        }
      });
    } else {
      // Form data is not valid, handle accordingly
      this.alertService.error('Please fill out the required fields correctly.');
    }
  }
}
