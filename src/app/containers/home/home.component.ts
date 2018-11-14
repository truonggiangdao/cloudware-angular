import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HomeService } from '@app/services/api/home/home.service';
import { HomeResponse } from '@app/common/classes/api/home/HomeResponse';
import { HomeStore } from '@app/store/home.store';
import { Router } from '@angular/router';
import { TokenService } from '@app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked, OnDestroy {

  dataLoaded = false;


  constructor(
    private homeService: HomeService,
    private homeStore: HomeStore,
    private router: Router,
    private tokenService: TokenService,
    // private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.getAPIData();
  }

  ngAfterViewChecked() {
    // this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
  }

  getAPIData = () => {
    this.homeService.getContent()
    .subscribe((response: HomeResponse) => {
      this.homeStore.intro = response.data;
      this.dataLoaded = true;
    });
  }

  goToLogin = () => {
    this.router.navigate(['/']);
  }

  logOut = () => {
    this.tokenService.clearToken();
  }
}
