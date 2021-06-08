import {Component, OnInit} from '@angular/core';
import {AuthService, ConfigService, UserService} from '../../../service';
import {Router} from '@angular/router';
import {User} from '../../Person/user';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit {

  user: User;

  constructor(
    private config: ConfigService,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
  }

  hasRoleEmployee() {
    const user = this.userService.currentUser;
    if(user.authorities[0].authority !== null)
    {
      return user.authorities[0].authority === 'ROLE_EMPLOYEE';
    }
  }

  ngOnInit() {
    this.user = this.userService.currentUser;
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/login']);
    });
  }
}
