import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { ManageUsersService } from '../../../manage-users/services/manage-users.service';
import { ManageEmailService } from '../../services/manage-email.service';
import { UserGroupPopupComponent } from '../user-group-popup/user-group-popup.component';

@Component({
  selector: 'user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss'],
})
export class UserGroupComponent implements OnInit {
  dlList: any = [];
  dlListCopy: any = [];
  newDL: boolean = false;
  groupName: string = '';
  userList: any = [];
  userListCopy: any = [];
  selectedEmails: any[] = [];
  allUsers: any = [];
  allUsersCopy: any = [];
  showEmailUsers: boolean = false;
  selectedGroup: string;
  userDetails: any;
  model: any;
  showSpinner: boolean = false

  constructor(
    public manageEmailService: ManageEmailService,
    private modalService: NgbModal,
    public manageUsersService: ManageUsersService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.getUniqueDLNames();
    this.getAllUsers();
  }

  searchUserGroup(event) {
    if (event.target.value.length > 0) {
      this.dlList = this.dlList
        .filter((dl) => {
          if (dl.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
            return dl;
          }
        })
        .slice(0, 10);
    } else {
      this.dlList = this.dlListCopy;
    }
  }

  searcNewMail(event) {
    if (event.target.value.length > 0) {
      this.allUsers = this.allUsers
        .filter((user) => {
          if (
            user.emailId
              .toLowerCase()
              .indexOf(event.target.value.toLowerCase()) > -1 ||
            user.firstName
              .toLowerCase()
              .indexOf(event.target.value.toLowerCase()) > -1
          ) {
            return user;
          }
        })
        .slice(0, 10);
    } else {
      this.allUsers = this.allUsersCopy;
    }
  }

  searchAssignedMail(event) {
    if (event.target.value.length > 0) {
      this.userList = this.userList
        .filter((user) => {
          if (
            user.emailId
              .toLowerCase()
              .indexOf(event.target.value.toLowerCase()) > -1
          ) {
            return user;
          }
        })
        .slice(0, 10);
    } else {
      this.userList = this.userListCopy;
    }
  }

  createDL() {
    this.newDL = true;
    const eventModal = this.modalService.open(UserGroupPopupComponent);
    eventModal.result.then((data) => {
      this.getUniqueDLNames();
    });
  }

  getUniqueDLNames() {
    this.manageEmailService
      .getUniqueDLNames(JSON.parse(localStorage.getItem('userData')).user.id)
      .subscribe((result) => {
        this.dlList = result.response;
        this.dlListCopy = [...this.dlList];
        this.showSpinner = false;
      }, error => {
        this.showSpinner = false;
        this.toastr.error(error, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
      });
  }

  getAllUsers() {
    this.manageUsersService.getUsers().subscribe((result) => {
      this.allUsers = result.response;
      this.allUsersCopy = [...this.allUsers];
      this.showSpinner = false;
    }, error=>{
      this.showSpinner = false;
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }

  onSelect(user) {
    if (user.target.checked) {
      this.selectedEmails.push({
        dlName: this.selectedGroup,
        name: JSON.parse(localStorage.getItem('userData')).user.id,
        emailId: user.target.value,
        createdBy: JSON.parse(localStorage.getItem('userData')).user.id,
      });
    }
    if (!user.target.checked) {
      this.selectedEmails = this.selectedEmails.filter((emails) => {
        if (emails.emailId != user.target.value) {
          return emails;
        }
        return;
      });
    }
    console.log(this.selectedEmails);
  }

  selectedDL(DL) {
    this.selectedGroup = DL;
    this.manageEmailService.getEmailListFromDL(DL).subscribe((result) => {
      this.toastr.success(result.message, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
      this.userList = result.response;
      this.userListCopy = [...this.userList];
    }, error => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }

  addToDL() {
    this.manageEmailService
      .addEmailToDL(this.selectedEmails)
      .subscribe((result) => {
        this.toastr.success(result.message, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
        this.selectedDL(this.selectedGroup);
        this.showEmailUsers;
      }, error => {
        this.toastr.error(error, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
      });
  }

  removeEmailFromDL(user) {
    const confirmationModal = this.modalService.open(
      ConfirmationPopupComponent
    );
    confirmationModal.result.then((data) => {
      if (data == 'success') {
        this.manageEmailService
          .removeEmailFromDL(user.id)
          .subscribe((result) => {
            this.toastr.success(result.message, '', {
              closeButton: true,
              positionClass: 'toast-top-center',
            });
            this.userList = this.userList.filter((emails) => {
              if (emails.id != user.id) {
                return emails;
              }
              return;
            });
          }, error => {
            this.toastr.error(error, '', {
              closeButton: true,
              positionClass: 'toast-top-center',
            });
          });
      }
    });
  }
  deleteDL(event, DL) {
    event.stopPropagation();
    const confirmationModal = this.modalService.open(
      ConfirmationPopupComponent
    );
    confirmationModal.result.then((data) => {
      if (data == 'success') {
        this.manageEmailService.deleteDL(DL).subscribe((result) => {
          this.toastr.success(result.message, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
          this.dlList = this.dlList.filter((dl) => {
            if (dl != DL) {
              return dl;
            }
            return;
          });
        }, error=>{
          this.toastr.error(error, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
        });
      }
    });
  }
}
