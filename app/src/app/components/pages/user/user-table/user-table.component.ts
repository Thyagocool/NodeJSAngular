import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input() user:User[] = []
  @Output() showFormNew = new EventEmitter;
  @Output() showFormEdit = new EventEmitter;
  @Output() removeUser = new EventEmitter;

  openModalNew(){
    this.showFormNew.emit();

  }

  openModalEdit(user: User){
    this.showFormEdit.emit(user);
  }

  deleteUser(user: User) {
    if(confirm("Are you sure to delete " + user.id)) {
      this.removeUser.emit(user)
    }
  }
}
