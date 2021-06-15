import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DisplayMessage} from '../shared/models/display-message';
import {AuthService, UserService} from '../service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {User} from '../component';
import {AccountRoles} from '../shared/models/account-roles';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {resolveFileWithPostfixes} from '@angular/compiler-cli/ngcc/src/utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  socialUser: SocialUser;
  isLoggedin: boolean;
  title = 'Login';
  githubLink = 'https://github.com/bfwg/angular-spring-starter';
  form: FormGroup;
  formRegister: FormGroup;
  formLogin:FormGroup;
  accessToken:string;
  onSuccessLoginRedirectUrl: string;
  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

  /**
   * Notification message from received
   * form request or router
   */
  notification: DisplayMessage;

  returnUrl: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((params: DisplayMessage) => {
        this.notification = params;
      });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn('ClerD4tMPfKEhLgsZOdXhle7')
      .then(response=> {
        this.accessToken = response.id.toString();
        this.formLogin = this.formBuilder.group({
          username: [response.name],
          password: [this.accessToken]
        });
        console.log('Kacper jurek'+this.accessToken)
        this.authService.login(this.formLogin.value)
          .subscribe(data => {
              this.userService.getMyInfo().subscribe(
                (data1: User) => {
                  // 300 iq redirection function
                  this.router.navigate([this.getRedirectUrl(data1)]);
                })
            },
            error => {
              this.submitted = false;
              this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
            });
      })
  }
  registerWithGoogle(): void {
    this.notification = undefined;
    this.submitted = true;
    this.socialAuthService.signIn('ClerD4tMPfKEhLgsZOdXhle7')
      .then(response=>{
        this.accessToken = response.id.toString();
        this.formRegister = this.formBuilder.group({
          username: [response.name],
          password: [this.accessToken],
          firstName: [response.firstName],
          lastName: [response.lastName],
          imgUrl: [response.photoUrl],
          email: [response.email],
          phonenumber:[120010000]
        });
        this.authService.signup(this.formRegister.value)
          .subscribe(data => {
              this.authService.login(this.formRegister.value).subscribe(() => {
                this.userService.getMyInfo().subscribe();
              });
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.submitted = false;
              console.log('Sign up error' + JSON.stringify(error));
              this.notification = {msgType: 'error', msgBody: error.error.errorMessage};
            });
      }
    )
  }
  repository() {
    window.location.href = this.githubLink;
  }

  onSubmit() {
    this.notification = undefined;
    this.submitted = true;

    this.authService.login(this.form.value)
      .subscribe(data => {
          this.userService.getMyInfo().subscribe(
            (data1: User) => {
              // 300 iq redirection function
            this.router.navigate([this.getRedirectUrl(data1)]);
          })
        },
        error => {
          this.submitted = false;
          this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
        });
  }

  onResetCredentials() {
    this.userService.resetCredentials()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        if (res.result === 'success') {
          alert('Password has been reset to 123 for all accounts');
        } else {
          alert('Server error');
        }
      });
  }

  getRedirectUrl(user: User): string {
    for (const authority of user.authorities) {
      if(authority.authority === AccountRoles.admin){
        return '/admin-panel';
      }
      else if(authority.authority === AccountRoles.user){
        return '/';
      }
      else if (authority.authority === AccountRoles.courier) {
        return '/courier-panel';
      }
      else if(authority.authority === AccountRoles.employee){
        return '/';
      }
    }
  }
}
