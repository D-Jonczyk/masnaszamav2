import {Component, OnInit} from '@angular/core';
import {AuthService, ConfigService, UserService} from '../../../service';
import {Router} from '@angular/router';
import {User} from '../../Person/user';
import {AccountRoles} from '../../../shared/models/account-roles';

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
    if (this.userService.currentUser){
      for (const authority of this.userService.currentUser.authorities) {
        if(authority.authority === AccountRoles.employee) {
          return true;
        }
      }
    }
    return false;
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
