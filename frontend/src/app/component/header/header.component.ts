import {Component, OnInit} from '@angular/core';
import {AuthService, UserService} from '../../service';
import {Router} from '@angular/router';
import {Authority} from '../Person/authority';
import {auth} from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/login']);
    });
  }

  hasSignedIn() {
    return !!this.userService.currentUser;
  }

  userName() {
    const user = this.userService.currentUser;
    return user.firstname + ' ' + user.lastname;
  }

  printRole(): string {
    const user = this.userService.currentUser;
    for (const authority of user.authorities) {
      if(authority.authority === 'ROLE_USER'){
        return 'Klient';
      }
      else if (authority.authority === 'ROLE_COURIER') {
        return 'Kurier';
      }
    }
    return '';
  }
}
