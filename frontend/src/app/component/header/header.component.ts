import {Component, OnInit} from '@angular/core';
import {AuthService, UserService} from '../../service';
import {Router} from '@angular/router';
import {AccountRoles} from '../../shared/models/account-roles';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faShippingFast} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private library: FaIconLibrary
  ) {
    library.addIcons(faShippingFast)
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

  isCourier() {
    if(this.hasSignedIn()) {
      for (const authority of this.userService.currentUser.authorities) {
        if(authority.authority === AccountRoles.courier) {
          return true;
        }
      }
      return false;
    }
  }

  userName() {
    const user = this.userService.currentUser;
    return user.firstName + ' ' + user.lastName;
  }

  printRole(): string {
    const user = this.userService.currentUser;
    for (const authority of user.authorities) {
      if(authority.authority === AccountRoles.user){
        return 'Klient';
      }
      else if (authority.authority === AccountRoles.courier) {
        return 'Kurier';
      }
      else if (authority.authority === AccountRoles.employee) {
        return 'Pracownik';
      }
    }
    return '';
  }
}
