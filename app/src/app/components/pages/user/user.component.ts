import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../../../interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(private service: UserService) {
    this.getUSers(null);
  }

  operatorType: string = '';
  display: boolean = false;
  users: User[] = [];
  user: User = {};
  titlePage: string = 'Cadastro de Usuários';

  ngOnInit() {}

  getUSers(event: any) {
    this.service
      .selectUsers()
      .pipe(
        tap({
          next: data => this.users = data,
          error: err => console.error(err),
        })
      )
      .subscribe();
  }

  openDialogEdit(user: any) {
    this.user = user;
    this.display = !this.display;
    this.operatorType = 'edit';
    this.getUSers(null);
  }

  openDialogNew() {
    this.display = !this.display;
    this.operatorType = 'new';
    this.getUSers(null);
  }

  deleteUser(user: User){
    const id: any = user.id;
    this.service.deleteUser(id).pipe(
      tap({
        next: res => {
          this.getUSers(null);
        },
        error: erro => console.error(erro)
      })
    ).subscribe()
  }
}
