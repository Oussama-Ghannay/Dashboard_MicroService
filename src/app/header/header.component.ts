import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private authService: LoginServiceService) {

     
   }

  ngOnInit(): void {
  }
//  shouldDisplayHeader: boolean = true;
logout(): void {
  localStorage.removeItem('currentUser'); 
  this.authService.logout().subscribe(
    (response) => {
      // Additional actions upon successful logout response, if needed
      console.log('Logged out successfully', response);
    
      window.location.href = '/login'; // Redirect to the login page
    },
    (error) => {
      // Handle errors during logout
      console.error('Error during logout:', error);
    }
  );
}
}
