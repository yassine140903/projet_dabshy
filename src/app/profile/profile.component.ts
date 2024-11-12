import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileDataPassService } from '../../services/profileDataPass.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user!: User;
  
  constructor(
    private route: ActivatedRoute,
    private UserService: ProfileDataPassService
  ) {}

  ngOnInit(): void {
    // Subscribe to the article data from the service
    this.UserService.currentUser.subscribe((data) => {
      if (data) {
        this.user = data;
      }
    });
  }
}
