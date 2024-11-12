import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileDataPassService } from '../../services/profileDataPass.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {  
  user : User = {
    userId : '1',
    userName : 'mhbxii',
    profileImageUrl : "assets/images/profilepic.png",
    userPhoneNumber : "+21624644429",
    userRegion : "Kebili",
    isLoggedIn : true,
  };

  constructor(private profileService: ProfileDataPassService, private router: Router) {}

  onProfileClick(user: User) {
    this.profileService.setProfile(user);
    this.router.navigate(['/profile', user.userId]);
  }

}
  
