import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  users: Observable<User[]>
  mobileQuery: MediaQueryList;
  
  fillerNav = Array(10).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  
  fillerContent = Array(0).fill(0).map(() =>
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
  
  private _mobileQueryListener: () => void;
  
  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private userService: UserService,
    private router: Router) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
    
    
    ngOnInit(): void {
      this.users = this.userService.users
      this.userService.loaddAll()

      this.users.subscribe(data =>{
        if(data.length > 0) this.router.navigate(['/phonebook', data[0].id])
      })
    }
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
