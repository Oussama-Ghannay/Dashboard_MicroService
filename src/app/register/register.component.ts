import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: any = {}; 
  constructor(private userService: LoginServiceService,private router: Router) { }

  ngOnInit(): void {
    this.userData.cin=0;
  }

  registerUser(): void {
    this.userService.register(this.userData).subscribe(
      (response) => {

        console.log('Registration successful!', response);
        // Navigate to login page
        this.router.navigate(['/login']);

      },
      (error) => {
        console.error('Error during registration:', error);
        // Handle error (e.g., display an error message)
      }
    );
  }

}
