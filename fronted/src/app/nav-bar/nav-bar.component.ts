import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileDataPassService } from '../../services/profileDataPass.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {  
  constructor(private profileService: ProfileDataPassService, public router: Router, public authService: AuthService) {}


}
  
