import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginu-ser',
  templateUrl: './loginu-ser.component.html',
  styleUrls: ['./loginu-ser.component.css']
})
export class LoginuSERComponent implements OnInit {

  constructor(private loginService: LoginServiceService,private router: Router) { }
  userData: any = {};
  errorMessage: string = '';
  ngOnInit(): void {
  }
  loginUser(): void {
    this.loginService.login(this.userData).subscribe(
      (response) => {
        console.log('Login successful!', response);
        // Navigate to another page on successful login
        this.router.navigate(['/blog']);
      },
      (error) => {
        console.error('Error during login:', error);
        if (error.status === 401) {
          this.errorMessage = 'Invalid email or password'; // Customize error message as needed
        } else {
          this.errorMessage = 'An error occurred during login';
        }
        // Handle error (e.g., display an error message)
      }
    );
  }
}
