import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: false,
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  userSerivce = inject(UserService);
  router = inject(Router);

  fb = inject(FormBuilder)

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.userSerivce.signUp(this.signupForm.value);
      this.router.navigateByUrl('/home'); 
    }
  }
}