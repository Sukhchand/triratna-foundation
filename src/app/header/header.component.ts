import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  rolesPermission: boolean = false;
  closeResult: string;
  selectedCountry: string = 'India';
  countryList: string[] = [];
  isAuthenticated: boolean = JSON.parse(localStorage.getItem('userData'));
  constructor(
    private modalService: NgbModal,
    private router: Router,
    public loginService: LoginService
  ) {}

  ngOnInit() {
    if (
      JSON.parse(localStorage.getItem('userData')).user.roles[0].includes(
        'sadmin'
      ) ||
      JSON.parse(localStorage.getItem('userData')).user.roles[0].includes(
        'admin'
      )
    ) {
      this.rolesPermission = true;
    }
    this.countryList = ['India', 'Nepal', 'USA'];
  }
  openLoginPopup() {
    this.modalService
      .open(LoginComponent, { centered: true })
      .result.then((data) => {
        if (data == 'Login') {
          this.isAuthenticated = true;
        }
      });
  }

  signOut() {
    this.loginService.signOut();
    if (!JSON.parse(localStorage.getItem('userData'))) {
      this.isAuthenticated = false;
    }
    this.router.navigateByUrl('/');
  }
}
