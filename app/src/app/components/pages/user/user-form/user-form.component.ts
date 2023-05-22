import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Output() onHideDialog = new EventEmitter();
  @Input() operatorType:string = '';
  @Input() user: any = [];

  userForm!: FormGroup;
  errorDescription: string = '';

  constructor(private formBuilder: FormBuilder, private service: UserService){}

  ngOnInit(){
    this.userForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    if(this.operatorType=='edit'){
      this.userForm.controls['email'].setValue(this.user.email)
    }

  }

  saveUser(){
    if(this.operatorType=='new'){
      const user = this.userForm.getRawValue();
      if(!this.userForm.invalid){
        this.service.insertUser(user).pipe(
          tap({
            next: res => {
              this.hideShowDialog();
            },
            error: erro => console.log(erro)
          })
        ).subscribe()
      }
    }else{
      const user = this.user;
      if(!this.userForm.invalid){
        this.service.updateUser(user.id, user).pipe(
          tap({
            next: res => {
              this.hideShowDialog();
            },
            error: erro => console.log(erro)
          })
        ).subscribe()
      }
    }
    this.userForm.reset();
  }

  hideShowDialog() {
    this.onHideDialog.emit();
    this.userForm.reset();

  }
}
