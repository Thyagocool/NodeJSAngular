import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  @Output() onHideDialog = new EventEmitter();
  @Input() operatorType: string = '';
  @Input() post: any = [];

  postForm!: FormGroup;
  errorDescription: string = '';

  constructor(private formBuilder: FormBuilder, private service: PostService) {}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    if (this.operatorType == 'edit') {
      this.postForm.controls['email'].setValue(this.post.email);
    }
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
              error: (erro) => console.log(erro),
            })
          )
          .subscribe();
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
              error: (erro) => console.log(erro),
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
