import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  @Output() onHideDialog = new EventEmitter();
  @Input() operatorType: string = '';
  @Input() post: any = [];

  users: User[] = []
  selectedUser: string = '';

  postForm!: FormGroup;
  errorDescription: string = '';

  constructor(private formBuilder: FormBuilder, private service: PostService, private userService: UserService) {}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      post: ['', [Validators.required]],
      id_author: ['', Validators.required],
    });


    this.userService.selectUsers().pipe(
      tap({
        next: res => {
          this.users = res
        },
        error: error => console.error(error)
      })
    ).subscribe()

  }

  savePost() {
    if (this.operatorType == 'new') {
      const post = this.postForm.getRawValue();
      if (!this.postForm.invalid) {
        this.service
          .insertPost(post)
          .pipe(
            tap({
              next: (res) => {
                this.hideShowDialog();
              },
              error: (erro) => console.error(erro),
            })
          ).subscribe();
      }
    } else {
      const post = this.post;

      if (!this.postForm.invalid) {
        this.service
          .updatePost(post.id, post)
          .pipe(
            tap({
              next: (res) => {
                this.hideShowDialog();
              },
              error: (erro) => console.error(erro),
            })
          )
          .subscribe();
      }
    }
    this.postForm.reset();
  }

  hideShowDialog() {
    this.onHideDialog.emit();
    this.postForm.reset();
  }
}
